"use client";
export default function Home() {
  document.body.classList.add("loaded");

  var pointerX = 0;
  var pointerY = 0;
  var width = window.innerWidth / 2;
  var height = window.innerHeight / 2;
  var body = document.body;

  window.addEventListener(
    "resize",
    function (event) {
      width = window.innerWidth / 2;
      height = window.innerHeight / 2;
    },
    true
  );

  document.onmousemove = function (event) {
    pointerX = ((width - event.pageX) * -1) / width;
    pointerY = ((height - event.pageY) * -1) / height;
    body.style.setProperty("--x", pointerX.toString());
    body.style.setProperty("--y", pointerY.toString());
    body.style.setProperty(
      "--total",
      (Math.abs(pointerX) + Math.abs(pointerY)).toString()
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-xl bg-black w-screen h-screen">
        <div id="container">
          <button className=" relative bottom-[10%] z-10 ghst-btn stroke-zinc-50">
            -------
          </button>
        </div>
                  <a
            href="https://drive.google.com/uc?export=download&id=1ptKfCe58hjX_zvFef9im5YZ-j7JkdruT"
            download="game.zip"
            className="relative bottom-[18%] left-[20%] z-20 text-yellow-50"
          >
            --
          </a>
      </div>
    </div>
  );
}
