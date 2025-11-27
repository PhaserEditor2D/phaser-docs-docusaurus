for name in `ls *.mp4`; do

    new_name=$(basename $name .mp4).gif
    echo "![description](../../images/$new_name)"
    ffmpeg -i $name -vf "fps=5,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3:diff_mode=rectangle" -gifflags -transdiff -y step_1_$new_name
    gifsicle -O3 --colors 254 --lossy=35 step_1_$new_name -o $new_name
    rm step_1_$new_name
done