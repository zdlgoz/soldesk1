#!/bin/bash
rm -f /etc/yum.repos.d/*
cat <<EOF > /etc/yum.repos.d/centos.repo
[base]
name=CentOS-7 - Base
baseurl=http://mirror.kakao.com/centos/7/os/\$basearch/
gpgcheck=0

[updates]
name=CentOS-7 - Updates
baseurl=http://mirror.kakao.com/centos/7/updates/\$basearch
gpgcheck=0

[extras]
name=CentOS-7 - Extras
baseurl=http://mirror.kakao.com/centos/7/extras/\$basearch
gpgcheck=0
EOF
yum clean all
yum repolist