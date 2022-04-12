<template>
    <div class="colaborador">
    <v-container fluid class="pa-0">
        <p>
        “{{content.excerpt}}”
        </p>
        <div class="d-flex">
            <div class="colaborador-avatar">
                <v-avatar>
                    <nuxt-img :src="foto" alt="" />
                </v-avatar>
            </div>
            <div class="colaborador-content">
                <div>
                    <div class="colaborador-name">
                        {{content.name}}
                    </div>
                    <div class="colaborador-cargo accent--text">
                        <span>
                            {{content.cargo}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
    </div>
</template>

<script>
export default {
    props:{
        foto:{
            type: String,
            default: "/placeholder/avatar.png",
        },
        content:{
            type: Object,
            default: () => ({
                name: '{NOME}',
                cargo: '{CARGO}',
                empresa: '{EMPRESA}',
                excerpt: "{EXCERPT} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            })
        }
    }
};
</script>

<style lang="scss">
.colaborador-avatar{
    border-radius: 100%;
    padding: 5px;
    border: 2px solid var(--v-accent-darken1);
    margin-right: 1rem;
}
.colaborador-content{
    display: flex;
    align-items: center;
    .colaborador-cargo{
    }
}
</style>