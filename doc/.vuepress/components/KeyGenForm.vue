<<template>
	<div class='KeyGenForm'>
		<p v-if="!display">Para consumir a api é necessário criar uma chave. Inclua o seu email para criar a chave:</p>
		<form>
			<div v-if="error && !display" class='danger custom-block'>
				<p class="custom-block-title">Inclua seu email</p>
				<p>Preencha o campo abaixo para gerar sua chave	</p>
			</div>

			<p v-if="!display">
				<label for="email">Email</label>
				<input
					:class="{fetching: fetching}"
					id="email"
					v-model="email"
					type="email"
					name="email"
				>
			</p>
		</form>

		<div v-if="display" class="success">
			<p>A chave para <em class="success-email">{{ email }}</em> é:</p>
			<p id="success-hash"><code>{{ hash }}</code></p>

			<p>Você pode começar a usar esta chave para fazer requests. Para isso simplesmente inclua ao final da url conforme o exemplo abaixo:</p>
			
			<code>http://api-geosampa.herokuapp.com/v1/arquivos?chave={{hash}}</code>

			<div class="tip custom-block">
				<p>Acesse esta <a target='_blank' :href="'http://api-geosampa.herokuapp.com/v1/arquivos?chave='+this.hash">esta url</a> e veja os dados</p>
			</div>

		</div>
		<button @click="checkForm" v-if="!display && !fetching">Gerar chave</button>
		<DefLoader v-if="fetching"></DefLoader>
	</div>
</template>
<script>
export default {
	name: 'KeyGenForm',
	data() {
		return {
			error: false,
			email: null,
			message: null,
			hash: null,
			display: false,
			fetching: false
		}
	},
	mounted(){
		this.hash = this.hashGen(48)
	},
	methods: {
		copy(str){
			document.execCommand(str)
		},
		checkForm(){
			if (!this.email) {
				this.error = true
			}
			else {
				this.fetching = true
				setTimeout(e => { 
					this.display = true;
					this.fetching = false
				},1000) // simula fetch
				
			}

		},
		hashGen(length){
			let output           = '';
			let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*@#$%';
			let charactersLength = characters.length;

			for ( let i = 0; i < length; i++ ) {
				output += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			return output;
		}
	}
}
</script>

<style lang="scss" scoped>
.KeyGenForm,  form > p {
	display: flex;
	flex-direction: column;
}

a:hover{
	cursor: pointer

}

#success-hash code{
	font-size: 1em;
}

button{
	display: inline-block;
	font-size: 1.2rem;
	color: #fff;
	background-color: #0083f1;
	padding: 0.8rem 1.6rem;
	border-radius: 4px;
	transition: background-color 0.1s ease;
	box-sizing: border-box;
	border-bottom: 1px solid #0076d9;
	&:hover{ 
		background-color: #0d90ff; 
		cursor: pointer;
	}
}

#email {
	padding: 0.5em;
	font-size: 1em;
	&.fething {
		opacity: 0.5;
		border-color: #f3f0f0;
	}
}
	
</style>