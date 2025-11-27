for name in `ls *.png`; do

    new_name=$(basename $name .png).webp
    echo "![description](../../images/$new_name)"
    convert $name -define webp:lossless=true $new_name
    rm $name
done