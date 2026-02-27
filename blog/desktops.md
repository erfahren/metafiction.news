---
title: basic overview to GNU/Linux gui menus & *.desktop files
---

## basic overview to GNU/Linux gui menus & *.desktop files

So you install a program with a GUI but there is no menu item or you'd like a custom entry for a program in the menu...  — This is applicable for GNU/Linux desktop environments that utilize Desktop entries (.desktop) with [freedesktop.org interoperability specifications](https://www.freedesktop.org/wiki/Specifications/ "freedesktop.org interoperability specifications")


> Desktop entries (.desktop) are used to create menu entries for programs, associating icons for a program's menu entry item, & include sub-menu (_context menu_) entry capabilities (i.e., a web browser's option to "Open in new private window").

{/* truncate */}

Typically the files are in:
**/usr/share/applications** for all users

 &  

**~/.local/share/applications** for an individual user.
 
( **~/** _is_ **/home/&lt;_username_&gt;/** & **.local/** is a hidden directory )


> If the icons that are referenced in the files are in the respective directories of **/usr/share/icons** (or **/usr/share/pixmaps** ?) or **/home/&lt;_username_&gt;/.local/share/icons** then only the icon name is necessary (as opposed to the entire direct path to the icon). More info on icons here: [Is there a home directory location for overriding icons? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/404955/is-there-a-home-directory-location-for-overriding-icons "Is there a home directory location for overriding icons? - Unix & Linux Stack Exchange")


Copy an existing .desktop to the user home for a template & open to edit in text editor:<textarea class="code" contenteditable="true" spellcheck="false" aria-label='Code Sample'>cp /usr/share/applications/firefox.desktop $HOME/.local/share/applications</textarea>  —  


(another note: I create the symlinks of ~/.icons & ~/.fonts & ~/.themes to the corresponding directories in ~/.local/share/ ) Anyway...


Desktop entries (.desktop)'s are also used in the autostart directories of **/etc/xdg/autostart** & **/home/&lt;_username_&gt;/.config/autostart**  — A note here: when an autostart entry is made (manually or otherwise) in the "Session Settings" of a typical desktop environment's user interface (and the DE utilizes the user's autostart directory), if you uncheck the selection to enable the entry to autostart then it can (will?) add the "Hidden=true" line to the .desktop entry and the file may be invisible in file managers even when "show hidden" is enabled. The files can be listed in a terminal, though, with 

```
ls -a
``` 

> Desktop entries (.desktop)'s are used in **/usr/share/xsessions/** for session (desktop environment) login options, too.

**On command line the files can be executed with "_gtk-launch_"**

```
gtk-launch firefox.desktop
```

**They can also be used to set a specific custom theme for a GTK+ program:

```
Exec=env GTK_THEME=Adwaita gimp
```

### See also:

- [Desktop entries - ArchWiki - ArchWiki](https://wiki.archlinux.org/title/Desktop_entries "Desktop entries - ArchWiki") 


- [Bash: about .bashrc, .bash_profile, .profile, /etc/profile, etc/bash.bashrc and others - Stefaan Lippens](https://www.stefaanlippens.net/bashrc_and_others/ "Bash: about .bashrc, .bash_profile, .profile, /etc/profile, etc/bash.bashrc and others - Stefaan Lippens")


- [Environment variables - ArchWiki](https://wiki.archlinux.org/title/Environment_variables "Environment variables - ArchWiki")


- [Linux environment variable tips and tricks | Enable Sysadmin](https://www.redhat.com/sysadmin/linux-environment-variables "Linux environment variable tips and tricks | Enable Sysadmin")

