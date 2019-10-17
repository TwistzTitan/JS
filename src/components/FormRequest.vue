<template>
    <div>
        <input type="text" placeholder="Name of planet" v-model="name"/>
        <input type="text" placeholder="Climate of planet" v-model="climate"/>
        <input type="text" placeholder="Land of planet" v-model="land"/>
        <button type="submit" class="bt1" @click="find()">Send</button>
        <br>
        <li v-if="docID">
            <ul>
                <div v-for="(value,chave) in docID" :key="chave">
                {{chave}} : {{value}}
                </div>
            </ul>    
        </li>
        <br>
        <p>{{ report }}</p>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    data(){
        return {
            name:"",
            climate:"",
            land:"",
            docID:"",
            report:"",
            docIshover:false,
        }

    },
    methods:{

       find(){
           
            axios.get('http://localhost:9080/find?name='+this.name+
            "&climate="+this.climate+
            "&land="+this.land).then( res => {
                this.docID = res.data
            })
             
            
        },
        hoverDoc(){
            return this.docIshover == true
        }

    }

}
</script>
<style>
.bt1{
    background-color: gray;
    color: cornsilk;
    height: 20px;
    width: 110px ; 
}
.dochover{
    background-blend-mode: lighten;
    backface-visibility: 50%;
}

</style>