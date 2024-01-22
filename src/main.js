// import "/css/bootstrap.min.css";
// import "/css/border.css";
// import "/css/color.css";
// import "/css/colorH.css";
// import "/css/margin-padding.css";
import "/css/filter.css";
import "/css/customanim.css";
import "/css/animation.css";
import "/css/animationH.css";
import "/css/fontStyle.css";
import "/css/hover.css";
import "/css/transform.css";
import "./assets/main.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(autoAnimatePlugin);

app.mount("#app");
