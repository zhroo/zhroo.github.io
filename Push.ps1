Function Push {
    Set-Location C:\Users\moriz\Desktop\xxxx\dist # 切换到你要推送的仓库地址
    $now = Get-Date # 获取时间日期对象. 对!PowerShell是面向对象的
    $msg = "==> " + $now.ToString('yyyy-MM-dd HH:mm:ss') + " release <=="# 提交的消息
    Write-Output $msg >> .\gitpush.log # 输出到 日志文件gitpush.log
    git status >> .\gitpush.log # 将代码的相关信息输出到日志,下面几行也是
    git add . >> .\gitpush.log
    git commit -m $msg  >> .\gitpush.log
    git push  >> .\gitpush.log
}
# 上面实际上定义了一个函数
Push