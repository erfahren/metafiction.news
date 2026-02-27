---
title: "Mounting partitions at startup with /etc/fstab"
---

## Mounting partitions at startup with /etc/fstab

> One thing that is helpful for me is knowing how to set up /etc/fstab to mount partitions at boot. This example is for a dual-boot with Windows 7 and Linux with another NTFS "Data" partition accessible from both operating systems. I've also set up partitions for two separate Linux installs, and a shared 4GB swap for them.

{/* truncate */}

Below is a screenshot of the hard drive partitions in [GParted](https://gparted.org/ "GParted") GParted. 

![example screenshot](@site/static/img/hp-gparted.png)


In my Ubuntu install on "_/dev/sda6_" I made the directories I needed for mount points in /mnt

```
sudo mkdir /mnt/sda1 /mnt/win7 /mnt/sda3 /mnt/data_partition /mnt/arch8
```

**...and then ran "sudo blkid" to get the UUID's and added them to my [/etc/fstab](./etc-fstab_example](./etc-fstab_example "/etc/fstab")**

**When the /etc/fstab is ready run "sudo mount -a" in the terminal to check for errors.**

```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# &lt;file system&gt; &lt;mount point&gt;  &lt;type&gt;  &lt;options&gt;  &lt;dump&gt;  &lt;pass&gt;
# / was on /dev/sda6 during installation
UUID=f5e0d5b1-f810-4c51-80e2-c936f53f1444 /     ext4     rw,relatime,data=ordered     0       1
# swap on /dev/sda7
UUID=abc5a013-c49e-49ac-8a26-91891196fe50 none     swap     defaults     0       0
#
# Win7 PARTITIONS
# /dev/sda1
UUID=2AC27AD5C27AA4AB /mnt/sda1     ntfs    defaults,nls=utf8,umask=227     0       1
# /dev/sda2
# UUID=7262BFB062BF7785 /mnt/win7     ntfs    defaults,nls=utf8,umask=007,gid=46 0       1
UUID=7262BFB062BF7785 /mnt/win7     ntfs    defaults,nls=utf8,umask=227     0       1
# /dev/sda3 WIN7 RECOVERY
UUID=A4EA7D4EEA7D1E2C /mnt/sda3     ntfs    defaults,nls=utf8,umask=227     0       1
#
# DATA PARTITION
# /dev/sda5
UUID=3C4BB450261FC881  /mnt/data_partition     ntfs-3g    uid=1000,gid=100,umask=0022    0       0
#
# Arch8 /dev/sda8
UUID=f89bdc83-0e81-4a4b-96a4-03c2b33c8f1c /mnt/arch8     ext4     defaults     0       0
```

**The mount options in the first line for the NTFS "DATA" partition work for the main user (with _user id = 1000_, _group id = 100_).**


> Also - when mounting directories on ext file systems (e.g. for data partitions) you can use "chown" to change ownership on the directory to your user like "sudo&nbsp;chown&nbsp;-R&nbsp;_&lt;username&gt;_:&nbsp;_/path/to/dir_" (for single user).

```
sudo chown -R $USER: /path/to/dir
```

(Using the "&lt;_username_&gt;:" changes both the owner and group permissions to the user's like "&lt;_username_&gt;:&lt;_username_&gt;" would. I just used the environment variable "$USER" instead of my username in that command as well.)


### Other /etc/fstab guides:

- [Automatically Mounting Partitions In Linux Using /etc/fstab](http://www.go4expert.com/articles/automatically-mounting-partitions-linux-t7416/ "Automatically Mounting Partitions In Linux Using /etc/fstab")


- [fstab with uuid - blkid | Linux by Examples](http://linux.byexamples.com/archives/321/fstab-with-uuid/ "fstab with uuid - blkid | Linux by Examples")


- [Automatically Mount Partitions - Community Ubuntu Documentation](https://help.ubuntu.com/community/AutomaticallyMountPartitions "Automatically Mount Partitions - Community Ubuntu Documentation")

---