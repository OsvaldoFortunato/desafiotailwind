<template>
    <div>
        <canvas ref="chartCanvas" width="1000" height="500"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { shallowRef } from 'vue';
import axios from 'axios'

export default {
    data() {
        return {
            chart: null, // Armazenará a referência do gráfico
            paises: [],
            casos_confirmados: []
        };
    },
    mounted() {
        this.carregarPaisesCasos()
    },
    methods: {
        carregarPaisesCasos() {
            axios.get("https://covid19-brazil-api.now.sh/api/report/v1/countries")
                .then((result) => {

                    var lista_country = []
                    var lista_confirmed = []

                    result.data.data.forEach(element => {
                        lista_country.push(element.country)
                        lista_confirmed.push(element.confirmed)
                    });

                    this.chart = new Chart(this.$refs.chartCanvas, {
                        type: 'bar', // Tipo de gráfico: barras
                        data: {
                            labels: lista_country,
                            datasets: [{
                                label: 'casos confirmados ',
                                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor de fundo das barras
                                borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
                                borderWidth: 1,
                                data: lista_confirmed, // Dados das barras
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });

                    console.log(this.chart.data.labels)
                    console.log(this.chart.data.datasets[0].data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    }
}


</script>