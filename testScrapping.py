import re
arr=[]
with open("internship.routes.js", "r") as f1:
    for i in f1.readlines():
        if re.search("const",i):
            continue
        elif re.search("//",i):
            print(i)
            #arr.append(i)
        else:
            x = re.search('([/])\w+', i)
            if x:
                arr.append(x.group())
size=len(arr)
with open("result.json","a") as f2:
    f2.writelines('[')
    f2.write("\n")
    for i  in arr:
        if re.search('([/])\w+',str(i)):
            if size!=1:
                f2.write('{"url"')
                f2.write(':"')
                f2.writelines(i)
                f2.write('"},')
                f2.write("\n")
            else:
                f2.write('{"url"')
                f2.write(':"')
                f2.writelines(i)
                f2.write('"}')
                f2.write("\n")
        #elif re.search("//", str(i)):
            #f2.writelines("#"+i)
            #f2.write("\n")
        else:
            print(i)
        size=size-1

    f2.write("\n")
    f2.writelines(']')






