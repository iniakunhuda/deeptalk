<script>
	import { histories } from '../modules/histories';
	import { questions } from '../modules/questions';
	
	let selectedQuestion = "";
	
	function getRandomQuestion() {
		let num = Math.floor(Math.random() * $questions.length);
		return $questions[num];
	}
	
	function loadTalk() {
		selectedQuestion = getRandomQuestion();
		if(selectedQuestion == undefined) {
			selectedQuestion = "-";
			return;
		}

		histories.insert(selectedQuestion);
		questions.remove(selectedQuestion);
	}
	
	function reloadPage() {
		location.reload();
	}
	
	loadTalk();
	
</script>

<title>
	Ngobrol bareng kamu
</title>

<div class="py-12 bg-white dark:bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-40 mt-40 mt-3">
		<div class="text-center">
			<p class="absolute inset-x-0 top-5 text-gray-700">
				<a href="/tentang"><u>Tentang</u></a>
				<!-- <a href="/" on:click={}>Hapus</a> -->
			</p>
			<div class="stack">
				<div class="text-center  bg-base-100">
					<div class="card border border-base-content">
						<div class="card-body">
							<p class="mt-2 leading-8 font-light tracking-tight text-gray-900 text-2xl">
								{ (selectedQuestion == '-') ? 'Terima kasih sudah mau saling mendengarkan hari ini 😇' : selectedQuestion }
							</p>
						</div>
					</div>
				</div> 
				<div class="text-center border border-base-content card bg-base-100">
				<div class="card-body">B</div>
				</div> 
				<div class="text-center border border-base-content card bg-base-100">
				<div class="card-body">C</div>
				</div>
					
				<button class="text-primary" style="position:relative;top:60px" on:click={loadTalk}>
					{#if selectedQuestion == "-"}
					<span class="text-xl" on:click={reloadPage}>Selesai. Reload ulang?</span>
					{:else}
					<span class="text-xl">Buat pertanyaan lagi</span>
					{/if}
				</button>
			</div>
			<p class="absolute inset-x-0 bottom-5 text-gray-400">
				<span>Tanyakan ke orang terdekatmu</span>
			</p>
		</div>
		
	</div>
</div>

