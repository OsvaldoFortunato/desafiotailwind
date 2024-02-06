<template>
    <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Informações Pessoais</h2>

        <form @submit.prevent="">
            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Primeiro Nome</label>
                    <div class="mt-2">
                        <input type="text" name="primeiro-nome" id="first-name" autocomplete="given-name"
                            v-model="primeiro_nome"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Ultimo Nome</label>
                    <div class="mt-2">
                        <input type="text" name="ultimo-nome" id="last-name" autocomplete="family-name"
                            v-model="ultimo_nome"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-5">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Endereço de Email</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" v-model="email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
            </div>

            <button @click="submiterOsDados"
                class="mt-5 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cadastrar cliente
            </button>
        </form>

        <table class="mt-5  min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Identficador
                    </th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Nome Completo
                    </th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>

                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Operações
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(item) in dados_cliente">
                    <td class="px-6 py-4 whitespace-no-wrap">
                        {{ item._id }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        {{ item.primeiro_nome }} {{ item.ultimo_nome }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                        {{ item.email }}
                    </td>

                    <td class="px-6 py-4 whitespace-no-wrap">
                        <button class="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <span><i class="fa fa-eye"></i></span>
                        </button>
                        <button class="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <span><i class="fa fa-trash"></i></span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            dados_cliente: [],
            primeiro_nome: '',
            ultimo_nome: '',
            email: ''

        }
    },
    mounted() {
        this.atualizarATabela()
    },
    methods: {
        atualizarATabela() {
            axios.get("http://localhost:8081/api/clientes").then(resposta => {
                console.log(resposta.data)

                this.dados_cliente = resposta.data
            })
                .catch(error => {
                    console.log(error)
                })
        },
        limparCampos(){
            this.primeiro_nome=''
            this.ultimo_nome=''
        },
        submiterOsDados() {
            
            axios.post("http://localhost:8081/api/cliente", {
                'primeiro_nome': this.primeiro_nome,
                'ultimo_nome': this.ultimo_nome,
                'email': this.email
            }).then(resposta => {
                this.atualizarATabela()
                this.limparCampos()
                console.log("foi realizado com sucesso cadastro!")
            }).
                catch(error => {
                    console.log(error)
                })

            console.log("Os dados foram submetidos!")
        }
    }
}
</script>
