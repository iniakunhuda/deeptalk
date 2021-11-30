<script>
import talk from './talk.json';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let max_num = talk.q.length;
let num = random(0, max_num);
</script>

<title>
    Ngobrol bareng kamu
</title>

<div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-40 sm:mt-40 mt-3">
      <div class="text-center">
        <p class="absolute inset-x-0 top-5 text-gray-700">
            <a href="/tentang"><u>Tentang</u></a>
        </p>
        <!-- <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Deeptalk</h2> -->
        <div class="stack">
            <div class="text-center border border-base-content card bg-base-100">
              <div class="card-body">
                <p class="mt-2 leading-8 font-light tracking-tight text-gray-900 text-2xl">
                    { talk.q[num] }
                </p>
              </div>
            </div> 
            <div class="text-center border border-base-content card bg-base-100">
              <div class="card-body">B</div>
            </div> 
            <div class="text-center border border-base-content card bg-base-100">
              <div class="card-body">C</div>
            </div>
        </div>
        <p class="absolute inset-x-0 bottom-5 text-gray-400">
            <span>Tanyakan ke orang terdekatmu</span>
        </p>
      </div>

    </div>
</div>

