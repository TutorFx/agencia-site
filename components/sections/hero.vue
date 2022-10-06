<template>
    <div>
        <div class="hero">
            <v-container>
                <v-row class="align-center">
                    <v-col cols="12" md="8">
                        <div>
<!--                             <div class="d-flex justify-center justify-md-start">
                                <logo style="max-width: 200px" class="mb-10" />
                            </div> -->
                            <div class="display-1 font-weight-regular mb-10 text-center text-md-left">
                                Tenha um departamento de marketing expansivo contribuindo com a performance publicitária
                                <span class="primary--text font-weight-regular">e nos resultados de vendas da sua empresa.</span>
                            </div>
                            <div class="d-flex justify-center justify-md-start">
                                <div class="d-inline-block">
                                    <v-btn @click="$store.commit('contatoToggle')" rounded x-large outlined color="primary" class="mb-5">Quero ter bons resultados
                                    </v-btn>
                                    <div class="floating d-flex justify-center">
                                        <v-icon size="45">mdi mdi-chevron-down</v-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style lang="scss">
.hero{
    .row{
        min-height: 600px;
    }
}
</style>