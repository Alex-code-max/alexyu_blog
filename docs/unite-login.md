# 天元登录

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const params = new URLSearchParams(decodeURIComponent(location.search))
        const token = params.get('__AUTHZ_SSO_TICKET__')
        location.href=`vscode://alexyu.unite-plugin?__AUTHZ_SSO_TICKET__=${token}`
})
</script>
