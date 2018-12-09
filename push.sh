#!/bin/bash

clear

usage() {
    # 帮助
    echo "
-c | commit : 进行一次commit

-g | githu: 将项目推送至github

-h | help : 帮助
    "
    return
}

pushGithub() {
    # 向github推送最新代码
    local commitName="$1"
    while [[ ! -n  $commitName ]]; do
        echo -n "请输入本次推送描述 -> "
        read commitName
    done

    git add .
    git commit -m "$commitName"
    git push 

    echo $commitName
    return
}

commit() {
    # 进行一次commit、
    local commitName="$1"
    while [[ ! -n  $commitName ]]; do
        echo -n "请输入本次提交描述 -> "
        read commitName
    done

    git add .
    git commit -m "$commitName"

    echo $commitName


    return
}


if [[ ! -n $1 ]]; then
    usage
    exit
fi

while [[ -n $1 ]]; do
    case $1 in
                -c | commit) shift
                             commit $1
                             ;;
                -h | help) usage
                            exit
                            ;;
                -g | github) shift
                            pushGithub $1
                            ;;
                *) usage
                    exit 1
                    ;;
    esac
    shift
done

exit
