import os
import subprocess
import math


def split_video(file_path, max_size_mb):
    file_name = os.path.basename(file_path)
    file_ext = os.path.splitext(file_name)[1]
    file_name = os.path.splitext(file_name)[0]
    output_folder = os.path.join(os.path.dirname(file_path), file_name)

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    duration = float(subprocess.check_output(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
         '-of', 'default=noprint_wrappers=1:nokey=1', file_path]).strip())
    num_parts = math.ceil(duration / max_size_mb)

    command = [
        'ffmpeg',
        '-i', file_path,
        '-c', 'copy',
        '-f', 'segment',
        '-segment_time', str(max_size_mb),
        '-reset_timestamps', '1',
        '-map', '0',
        f'{output_folder}/{file_name}_%d{file_ext}'
    ]

    subprocess.call(command)

    for filename in os.listdir(output_folder):
        output_file_path = os.path.join(output_folder, filename)
        # Check if file size is larger than 100MB
        if os.path.getsize(output_file_path) > 100 * 1024 * 1024:
            print(
                f"Segment {filename} exceeds 100MB. Retrying with a smaller split size.")
            # Remove the current folder with oversized segments
            os.system('rm -rf "{}"'.format(output_folder))
            # Retry with half the original split size
            split_video(file_path, max_size_mb / 2)
            break


if __name__ == '__main__':
    for filename in os.listdir():
        if filename.endswith('.mkv') or filename.endswith('.mp4'):
            file_to_split = filename
            max_size_mb = 60
            split_video(file_to_split, max_size_mb)
