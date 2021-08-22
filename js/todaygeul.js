var todaygeul = document.querySelector("#todaygeul");

var quotes = [];
quotes[0] = "내가 성취하고자 하는 세계의 한계는 <br> 바로 내가 구사하는 언어의 한계다.<br><i>- 루트비히 비트겐슈타인</i>";
quotes[1] = "당신이 한밤중에 깨어 연필을 쥐고 있는 사람이라면,<br>자신을 믿으세요.<br><i> <인생은 이상하게 흐른다>_박연준</i>";
quotes[2] = "삶은 다만 돌이켜 이해할 수 있을 뿐이지만,<br>그럼에도 우리는 앞으로 나아가며 삶을 살아가야 한다.<br><i>- 키르케고르</i>";

var index = Math.floor(Math.random() * 3);
todaygeul.innerHTML="<p>" + quotes[index] + "</p>";



