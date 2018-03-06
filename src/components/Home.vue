<template>
  <Page class="page">
    <ActionBar class="action-bar" title="NSVue Axios"/>

    <StackLayout>
      <Label text="Hello world !" />
      <Button text="Get from URL" @tap="axiosGet"/>

      <Label textWrap="true">
        <FormattedString>
          <Span text="Data :" />
          <Span :text="data" />
        </FormattedString>
      </Label>
    </StackLayout>

  </Page>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {
    axiosGet() {
      this.axios.get('https://httpbin.org/get')
        .then((response) => {
          console.dir(response.data)
          this.data = JSON.stringify(response.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>

