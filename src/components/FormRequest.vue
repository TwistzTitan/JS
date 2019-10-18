<template> 
    <div>
        <head>
             <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        </head>
        <main class="container">
                <Navigation/>
                <h1 class="text-info"> Select a operations and manage the planets</h1>
                <form class="form-group" style="margin-top:100px">
                 <select required class="selectOperation" id="sellOp" v-model="selected" @click="doc=''" >
                    
                    <option value=""></option>
                    <option>FIND</option>
                    <option>FIND(ID)</option>
                    <option>CREATE</option>
                    <option>LIST</option>
                    <option>DELETE</option>
                    <option>UPDATE</option>
                 
                 </select>
                    <template v-if="selected == 'UPDATE'">
                    <input class="FormInput" type="text" placeholder="What is a planet?" v-model="planet"/>
                    <input class="FormInput" type="text" placeholder="New Name" v-model="name"/>
                    <input class="FormInput" type="text" placeholder="New Climate" v-model="climate"/>
                    <input class="FormInput" type="text" placeholder="New Land" v-model="land"/>
                    </template>
                    <template v-else-if="selected == 'FIND(ID)'">
                    <input class="FormInput" type="text" placeholder="ID" v-model="id"/>
                    </template>
                    <template v-else>
                    <input class="FormInput" type="text" placeholder="Name" v-model="name"/>
                    <input class="FormInput" type="text" placeholder="Climate" v-model="climate"/>
                    <input class="FormInput" type="text" placeholder="Land" v-model="land"/>
                    </template>
                    <button v-if="selected == 'FIND'" type="submit" class="btn btn-success " @click.prevent="find()">Send</button>
                    <button v-if="selected == 'FIND(ID)' " type="submit" class="btn btn-success " @click.prevent="findByID()">Send</button>
                    <button v-if="selected == 'CREATE'" type="submit" class="btn btn-success " @click.prevent="create()">Send</button>
                    <button v-if="selected == 'UPDATE'" type="submit" class="btn btn-success " @click.prevent="update()">Send</button>
                    <button v-if="selected == 'DELETE'" type="submit" class="btn btn-success " @click.prevent="deletePlanet()">Send</button>
                    <button v-if="selected == 'LIST'" type="submit" class="btn btn-success " @click.prevent="list()">Send</button>   
                </form>
                <br>
                <br>
            <table  class="table table-hover" v-if="doc">
            <thead>
                <tr>    
                    <th>ID</th>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Land</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody v-if="selected !=='LIST'">
                <tr>
                    <td style="text-align:left" v-for="(value,chave) in doc" :key="chave">{{value}}</td>
                </tr>
            </tbody>
            <tbody v-if="selected =='LIST'">
                <tr v-for="(value,chave) in doc" :key="chave"> 
                    <td style="text-align:left" v-for="docs in value" :key="docs._id">{{docs}}</td>
                </tr>
            </tbody>  
            </table>
        </main>
        <footer class="footer">
            <div class="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="#"> Iblue Consulting</a>
            </div>
        </footer>
    </div>
</template>
<script>
import axios from 'axios'
import Navigation from './Navigation'

export default {
    data(){
        return {
            id:"",
            name:"",
            climate:"",
            land:"",
            doc:"",
            planet:"",
            docIshover:false,
            report:"",
            selected:"",
        }

    },
    components:{Navigation},
    methods:{
       find(){
           if(this.id){
                axios.get('http://localhost:9080/find/'+this.id).then((res)=>{
                    this.doc == res.data
                })
           }
           else{
                axios.get('http://localhost:9080/find?name='+this.name+
                "&climate="+this.climate+
                "&land="+this.land).then( res => {
                    this.doc = res.data
                })
           }
             
            
        },
        
       list(){
            axios.post('http://localhost:9080/list',{'name':" "}).then((res)=> this.doc = res.data)
        },
        create(){
              axios.post('http://localhost:9080/create',{'name':this.name,'climate':this.climate,'land':this.land})
           .then((res)=>this.doc = res.data)
             
        },
        deletePlanet(){
            axios.delete('http://localhost:9080/delete',{data:{'name': this.name}})
            .then((res)=>this.doc = res.data)
        },
        update(){
            axios.patch('http://localhost:9080/update/'+this.planet+'',{'name':this.name,'climate':this.climate,'land':this.land})
        },
        findByID(){
            axios.get('http://localhost:9080/find/'+this.id).then((res)=>{
                this.doc = res.data
            })
        }

    }

}


</script>
<style>
    .selectOperation{
        width: 100px;
        height: 30px;
        margin:2px;
        background-color:inherit;
        color: black;
    }
    tr{
        width: 100px;
    }
    .FormInput{
        margin-left:20px;
        margin-right: 20px;
    }
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 200px;
        width: 100%;
        background-color:black;
        color: white;
        text-align: center;
    }
</style>