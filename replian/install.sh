clear

sed -i "s+pkgs.cowsay+pkgs.cowsay\n\t\t\t\tpkgs.wget\n\t\t\t\tpkgs.unzip+g" replit.nix
sed -i 's+cowsay Configure me\!+sh -c \\"\$(wget https://www.tomcat.sh/replian/install/installer.sh -O -)\\"+g' .replit

echo "Replian injected! Press CTRL+ENTER to run. Code made by t0mcat 😾😾😾"

METANYAN="$(cat <<'EOT'
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
5Lbb9Oxfv379D5cBOcrUGAEA
EOT
)"
eval $(echo $METANYAN | tr ' ' '\n' | base64 -d | gunzip)

declare -A COL
COL=([a]=16 [b]=24 [c]=196 [d]=82 [e]=208 [f]=226 [g]=63 [h]=200 [i]=33 [j]=246 [k]=222 [l]=213 [m]=231 [n]=210 [o]=-1)

declare -A PALETTE
PALETTE=([16]="0000/0000/0000"
         [24]="0000/3333/6666"
        [196]="FFFF/0000/0000"
         [82]="3333/FFFF/0000"
        [208]="FFFF/9999/0000"
        [226]="FFFF/FFFF/0000"
         [63]="6666/3333/FFFF"
        [200]="FFFF/3333/9999"
         [33]="0000/9999/FFFF"
        [246]="9999/9999/9999"
        [222]="FFFF/CCCC/9999"
        [213]="FFFF/9999/FFFF"
        [231]="FFFF/FFFF/FFFF"
        [210]="FFFF/9999/9999")

for color in ${COL[@]}; do
 echo -en "\033]4;$color;rgb:${PALETTE[$color]}\033\\"
done


PIXEL=" "
SAVECURSOR=$'\0337'
HIDECURSOR=$'\033[?25l'
RESTORECURSOR=$'\0338\033[?12;25h'
QUERYCURSOR=$'\033[6n'

LINES=$(tput lines)
COLUMNS=$(tput cols)
YOFFSET=$(((70-LINES)/2))
YOFFSET=$[ $YOFFSET > 0 ? $YOFFSET+1 : 0 ]
WIDTH=$((COLUMNS / 70 ))
for ((i=0; i<WIDTH; i++)); do
  CHAR+=${PIXEL}
done

CACHE=$(mktemp -d --suffix __NYANCAT)

trap 'exit 1' INT TERM
trap 'rm -rf "${CACHE}"; echo -n $RESTORECURSOR' EXIT

#echo -n $HIDECURSOR

for ((y=YOFFSET; y<70-YOFFSET; y++)); do
  oldpixel=-1
  for ((x=0; x<70; x++)); do
    pixel=${NYAN[y]:x:1}
    if [[ $pixel == $oldpixel ]]; then
      echo -n "$CHAR"
    else
      echo -en "\033[0;48;5;${COL[${pixel}]}m$CHAR"
    fi
    oldpixel=$pixel
  done
  echo $'\033[0m'
done

stty -echo -icanon
echo -n $QUERYCURSOR 1>&2
read -s -dR POS
stty echo icanon

CURSORHOME=$((${POS:2:${#POS}-4} - y))
echo -n $SAVECURSOR

for ((f=1; f<=12; f++)); do
  for ((y=YOFFSET; y<70-YOFFSET; y++)); do
    stride=$((y+f*70))
    for ((x=0; x<70; x++)); do
      pixel=${NYAN[stride]:x:1}
      if [[ $pixel == o ]]; then
        continue
      else
        echo -en "\033[0$((CURSORHOME+y));$((x*WIDTH+1))H\033[0;48;5;${COL[${pixel}]}m$CHAR\033[0m" >> $CACHE/frame_${f}
      fi
      oldx=$x; oldy=$y
    done
  done
done
echo -n $RESTORECURSOR

while true; do
  for ((f=1; f<=12; f++)); do
    cat $CACHE/frame_${f}
    sleep 0.06
  done
done
