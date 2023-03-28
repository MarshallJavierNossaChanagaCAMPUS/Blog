import myHeader from "./components/myHeader.js";
import myBanner from "./components/myBanner.js";
import myCards from "./components/myCards.js";
import myAside from "./components/myAside.js";
import myBlog from "./components/myBlog.js";
import myFooter from "./components/myFooter.js";

myHeader.worker();

myBanner.showImage();
myBanner.listTitleBanner();

myCards.listarCards();

myAside.showAside();

myBlog.listSection1();
myBlog.listSection2();
myBlog.listTable();
myBlog.listSection3();

myFooter.listFooter();