# 天元登录

<ClientOnly>
    <script>
        const params = new URLSearchParams(decodeURIComponent(location.search))
        const token = params.get('__AUTHZ_SSO_TICKET__')
        location.href=`vscode://alexyu.unite-plugin?__AUTHZ_SSO_TICKET__=${token}`
    </script>
</ClientOnly>
