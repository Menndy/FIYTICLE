import os
from PIL import Image
from cv2 import cv2 as cv

list=dataset = [[] for i in range(12)]
# 保存文件路径
def getName(): 
    path="./allImages/" #文件路径
    # path1="F:/imgMerge/t1/"
    filelist = os.listdir(path) #该文件夹下的所有文件
    dirlen=0
    countTotal =0

    for file in filelist: #遍历所有文件 包括文件夹
        Olddir = os.path.join(path,file)#原来文件夹的路径
        if os.path.isdir(Olddir):#如果是文件夹，则遍历下面图片
            imagelist = os.listdir(Olddir)
            for item in imagelist:
                Newdir=os.path.join(Olddir+"/",item)
                list[dirlen].append(Newdir)
                countTotal+=1
                # print(Newdir)
        dirlen+=1
    print(list)
    print(countTotal)


getName()