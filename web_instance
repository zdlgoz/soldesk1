#!/bin/bash
yum install -y httpd
systemctl start httpd
systemctl enable httpd
instance_id=$(ec2-metadata -i)
private_id=$(ec2-metadata -o)
cat <<EOF > /vat/www/html/index.html
<h1>서울 웹서버입니다.</h1>
<h3>${instance_id}</h3>
<h3>${private_id}</h3>
EOF
