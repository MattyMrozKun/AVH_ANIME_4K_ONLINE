@echo off
setlocal enabledelayedexpansion

set file_path=%1
set max_size_mb=%2

for %%i in ("%file_path%") do set "file_name=%%~ni"
for %%i in ("%file_path%") do set "file_ext=%%~xi"
for %%i in ("%file_path%") do set "output_folder=%%~dpi%%~ni"

if not exist "%output_folder%" mkdir "%output_folder%"

for /f "delims=" %%i in ('ffprobe -v error -show_entries format^=duration -of default^=noprint_wrappers^=1:nokey^=1 "%file_path%"') do set "duration=%%i"
set /a "chunk_duration=duration / 10"

if %duration% leq 0 (
    echo Plik wideo jest za krótki lub uszkodzony.
    exit /b 1
)

if %chunk_duration% leq 1 (
    set "chunk_duration=1"
)

set "part_number=0"
set "start_time=0"

:while2
set /a "end_time=start_time + chunk_duration"

if !end_time! gtr !duration! set "end_time=!duration!"

set "output_file=%output_folder%\%file_name%_%part_number%%file_ext%"
ffmpeg -y -i "%file_path%" -ss !start_time! -to !end_time! -c copy "!output_file!"

if !end_time! geq !duration! goto endwhile2

set /a "part_number+=1"
set "start_time=!end_time!"
goto while2

:endwhile2

endlocal
