# Replian Installer Script
# Run by using sh -c "$(wget https://www.tomcat.sh/replian/install/installer.sh -O -)"

clear

# version names
# 1.0 "precision"
# 2.0 "evening"
# 2.5 "great evening"

vernum="2.0"
codename="evening"

# Make text centered
length="$(($(tput cols)/2-30))"
length2="$(($(tput cols)/2-9))"
height="$(tput lines)"
extra=""
extra2=""

for i in $( seq 1 $length ); do
  extra="${extra} "
done

for i in $( seq 1 $length2 ); do
  extra2="${extra2} "
done

logo="$extra \e[31m _____               \e[36m_  \e[34m_                                  \n$extra \e[31m|  __ \\             \e[36m| |\e[34m(_)                   \e[93m\$\$\$\$\$\$        \n$extra \e[31m| |__) |\e[33m ___ \e[32m _ __  \e[36m| |\e[34m _  \e[35m __ _ \e[31m _ __       \e[93m\$\$\$\$\$\$        \n$extra \e[31m|  _  / \e[33m/ _ \e[32m\\| '_ \\ \e[36m| |\e[34m| | \e[35m/ _\` |\e[31m| '_ \\      \e[93m\$\$\$\$\$\$        \n$extra \e[31m| | \\ \e[33m\\|  __/\e[32m| |_) |\e[36m| |\e[34m| |\e[35m| (_| |\e[31m| | | |             \e[93m\$\$\$\$\$\$\n$extra \e[31m|_|  \\_\e[33m\\___| \e[32m| .__/ \e[36m|_|\e[34m|_| \e[35m\\__,_|\e[31m|_| |_|             \e[93m\$\$\$\$\$\$\n$extra              \e[32m| |                                     \e[93m\$\$\$\$\$\$\n$extra              \e[32m|_|                             \e[93m\$\$\$\$\$\$        \n$extra     \e[0m--------------------------------         \e[93m\$\$\$\$\$\$        \n$extra      \e[0mDebian Linux running on Replit          \e[93m\$\$\$\$\$\$        \n$extra     \e[0m--------------------------------                       \n\n"

# And print
echo -e "$logo"

# Ask question
read -p "Are you sure you want to install? (y/n) : " install

# Run installer if thing is y or Y
if [ "${install,,}" == "y" ]; then
  read -p "hostname: " hostname

  tput csr 0 $(($height-2))
  local pos

  clear

  echo -e "${extra2}\e[94mReplian Installer"

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[....................................................................................................]\e[0m 00%" 
  tput cup ${pos[1]} ${pos[2]}
  rm README.md
  echo "Removed unnecessary files"

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########............................................................................................]\e[0m 08%" 
  tput cup ${pos[1]} ${pos[2]}
  wget https://updatepakager.legamer4.repl.co/root/yt.zip &> /dev/null
  echo "Downloaded yt.zip"

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################....................................................................................]\e[0m 16%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Unzipping yt.zip... "
  yes | unzip yt.zip &> /dev/null
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########################............................................................................]\e[0m 24%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Unzipping root.zip... "
  yes | unzip root.zip &> /dev/null
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################################....................................................................]\e[0m 32%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Creating filesystem... "
  tar -xf root.tar.xz
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########################################............................................................]\e[0m 40%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Getting updater... "
  wget https://updatepakager.legamer4.repl.co/root/up-new.sh &> /dev/null
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################################################....................................................]\e[0m 48%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Getting start script... "
  wget https://updatepakager.legamer4.repl.co/root/root2-new.sh &> /dev/null
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########################################################............................................]\e[0m 56%" 
  tput cup ${pos[1]} ${pos[2]}
  echo "Moving files..."
  mv root2-new.sh root.sh

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################################################################....................................]\e[0m 64%" 
  tput cup ${pos[1]} ${pos[2]}
  mv up-new.sh up.sh

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########################################################################............................]\e[0m 72%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -n "Removing unneeded files... "
  rm root.sh replit.nix root.zip up.sh root.tar.xz yt.zip .replit
  echo "done."

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################################################################################....................]\e[0m 80%" 
  tput cup ${pos[1]} ${pos[2]}
  echo "Writing start script to .replit"
  echo "clear;echo -e \"                                                                 \\e[31m _____               \\e[36m_  \\e[34m_                                  \\n                                                                 \\e[31m|  __ \\             \\e[36m| |\\e[34m(_)                   \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                 \\e[31m| |__) |\\e[33m ___ \\e[32m _ __  \\e[36m| |\\e[34m _  \\e[35m __ _ \\e[31m _ __       \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                 \\e[31m|  _  / \\e[33m/ _ \\e[32m\\| '_ \\ \\e[36m| |\\e[34m| | \\e[35m/ _\\\` |\\e[31m| '_ \\      \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                 \\e[31m| | \\ \\e[33m\\|  __/\\e[32m| |_) |\\e[36m| |\\e[34m| |\\e[35m| (_| |\\e[31m| | | |             \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$\\n                                                                 \\e[31m|_|  \\_\\e[33m\\___| \\e[32m| .__/ \\e[36m|_|\\e[34m|_| \\e[35m\\__,_|\\e[31m|_| |_|             \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$\\n                                                                              \\e[32m| |                                     \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$\\n                                                                              \\e[32m|_|                             \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                     \\e[0m--------------------------------         \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                      \\e[0mDebian Linux running on Replit          \\e[93m\\\$\\\$\\\$\\\$\\\$\\\$        \\n                                                                     \\e[0m--------------------------------                       \\n\\n\";sleep 2;clear;./dist/proot -S . /bin/bash" > root.sh

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[########################################################################################............]\e[0m 88%" 
  tput cup ${pos[1]} ${pos[2]}
  echo "Doing final touches..."
  echo "run=\"bash root.sh\"
hidden=[\"root.sh\"]" > .replit

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[################################################################################################....]\e[0m 96%" 
  tput cup ${pos[1]} ${pos[2]}
  sed -i "s+Debian GNU/Linux 10 (buster)+Replian Linux ${vernum} (${codename})+g" ./etc/os-release

  IFS='[;' read -p $'\e[6n' -d R -a pos -rs || echo "failed with error: $? ; ${pos[*]}"
  tput cup $height 0
  echo -ne "Installing... \e[32m[###################################################################################################.]\e[0m 99%" 
  tput cup ${pos[1]} ${pos[2]}
  echo -e "$(cat ./etc/bash.bashrc)\nif [ ! -f /etc/firstbootover ]; then\n\techo \"Running first-time setup...\"\n\tapt update\n\tapt install sudo nano\n\techo \"done\" > /etc/firstbootover\n\tclear\nfi\ncat >> ~/.bashrc <<-'EOF'\nPS1='\\[\\e]0;\\u@\$HOSTNAME: \\w\\a\\]\${debian_chroot:+(\$debian_chroot)}\\[\\033[01;32m\\]\\u@\$HOSTNAME\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\$ '\nEOF\n. ~/.bashrc\nHOSTNAME=${hostname}" > ./etc/bash.bashrc

  # Hehe cat
  clear
  timer="3"
  cat=" ((      /|_/|
  \\\\.._.'   ||\\
  /\\ | '.__ w /
 (_ .   /   \"     \e[34mReplian installed successfully!\e[0m        
  ) _)._  _ /              \e[34mBooting in "
  cat2="...\e[0m
 '.\\ \\|( / (
   '' ''\\\\ \\\\"
  echo -e "$cat$timer$cat2"
  sleep 1
  clear
  timer="2"
  echo -e "$cat$timer$cat2"
  sleep 1
  clear
  timer="1"
  echo -e "$cat$timer$cat2"
  sleep 1
  clear
  bash root.sh
# Else say this

else
  clear
  echo -e "\e[94mExited Replian installer."
fi

# # # # # # # # # # # # # # # # # # # # # #
#  ((      /|_/|                          #
#  \\.._.'   ||\                          #
#  /\ | '.__ w /   haha                   #
# (_ .   /   "     i added cute kitty     #
#  ) _)._  _ /     he vewy cute uwu       #
# '.\ \|( / (                             #
#   '' ''\\ \\"                           #
# # # # # # # # # # # # # # # # # # # # # #
