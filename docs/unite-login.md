# 天元登录

<script>
    const params = new URLSearchParams(decodeURIComponent(location.search))
    const token = params.get('__AUTHZ_SSO_TICKET__')
    location.href=`vscode://?__AUTHZ_SSO_TICKET__=${token}`
</script>
