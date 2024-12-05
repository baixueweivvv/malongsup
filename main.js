const pages = {
    moment: `
    <section id="moment" class="section py-24">
        <div class="max-w-6xl mx-auto fade-in">
            <h2 class="text-4xl font-bold mb-4 text-center text-coffee-dark">瞬间</h2>
            <p class="text-center text-coffee/60 mb-12">闭上眼睛，就是快门。不断更新，值得记录的瞬间</p>
            <!-- Swiper -->
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/1.jpg" alt="照片1"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第1张照片</h3>
                                <p class="text-sm">马龙作品集</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/2.jpg" alt="照片2"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第2张照片</h3>
                                <p class="text-sm">这马龙作品集.</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/3.jpg" alt="照片3"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第3张照片</h3>
                                <p class="text-sm">马龙作品集</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/4.jpg" alt="照片4"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第4张照片</h3>
                                <p class="text-sm">马龙作品集.</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/5.jpg" alt="照片5"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第5张照片</h3>
                                <p class="text-sm">马龙作品集</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/6.jpg" alt="照片6"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第6张照片</h3>
                                <p class="text-sm">马龙作品集.</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/7.jpg" alt="照片7"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第7张照片</h3>
                                <p class="text-sm">马龙作品集</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="relative group">
                            <img src="public/moment/8.jpg" alt="照片8"
                                 class="w-full h-[600px] object-cover rounded-2xl">
                            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-2xl
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 class="text-xl font-semibold mb-2">第8张照片</h3>
                                <p class="text-sm">马龙作品集</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next text-coffee-dark"></div>
                <div class="swiper-button-prev text-coffee-dark"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
`,
blessing: `
    <section id="blessing" class="section py-24">
        <div class="max-w-4xl mx-auto fade-in">
            <h2 class="text-4xl font-bold mb-4 text-center text-coffee-dark">祝福</h2>
            <p class="text-center text-coffee/60 mb-12">爱是一种永不竭力的能量，这里都是你爱的以及爱你的人</p>
            
            <div class="space-y-8">
                <!-- 祝福文字1 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                要到我龙生日了 祝我龙生日快乐
不知不觉这是我们认识的第九个年头了
在这九年里我目睹你的成长进步，一步步变得现在这么优秀！
明年也是你进入新身份的一年（要做爸爸了！）
希望你身体健康 多多挣钱 和老白甜甜蜜蜜~
也祝宝宝健康出生 茁壮成长！
愿这完全属于你的一天给你带来快乐，愿未来的日子能够锦上添花!
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 李鹏宇</p>
                        </div>
                    </div>
                </div>

                <!-- 祝福文字2 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                赠老🐎和老白
三年同窗，十五载相识。
共度时光，风华正茂，
笑语盈盈，青春不老。
那时共梦，同撑风雨伞，
如今各方，仍思牵彼岸。

五年相识，往后共余生。
携手同行，白头偕老，
步步生花，岁岁平安，
风雨兼程，不变初心颜，
家和万事兴，幸福永缱绻。
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 李杰</p>
                        </div>
                    </div>
                </div>

                <!-- 祝福文字3 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                吾友马龙，见字如面。
首先!!! 祝你生日快乐！在新的一岁里，我希望你可以继续勇敢做自己，继续探寻世界，继续热烈生活；我希望你活得顺遂又幸福，过的认真又洒脱。
其次!!! 我们也认识了15年，在即将到来的第16年以及以后的每一年，作为朋友都希望你能跟所有的烦恼说拜拜，跟所有的快乐说嗨嗨！有幸能在你熠熠生辉的日子里分享点点滴滴，一句话，一杯酒。
最后!!! 从这一年开始你也多了一重身份，希望你要加倍的爱护你的小家庭，呵护白总，照顾好小马龙和小白雪薇！
最后的最后!!! 祝马龙生日快乐，幸福美满，所愿皆所得！
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 孙飞宇</p>
                        </div>
                    </div>
                </div>

                <!-- 祝福文字4 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                儿子今天是你的生日，今天老妈没什么送你的，祝你工作顺利，事业有成，前方有路，未来可期，人生路上要有担当，有责任，懂感恩，儿子生日快乐，一生健康，平安喜乐。
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 妈妈</p>
                        </div>
                    </div>
                </div>

                <!-- 祝福文字5 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                祝智慧与帅气随岁月一并增长的哥哥生日快乐!寿星今日称王,愿望都能成真!!生日快乐生日快乐生日快乐生日快乐生日快乐生日快乐生日快乐生日快乐生日快乐！
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 小马</p>
                        </div>
                    </div>
                </div>

                <!-- 祝福文字6 -->
                <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coffee/5">
                    <div class="flex items-start space-x-4">
                        <div class="text-4xl text-coffee-light font-serif">"</div>
                        <div>
                            <p class="text-coffee leading-relaxed">
                                儿子，生日快乐，你是爸爸的骄傲，愿你的每一天都充满阳光和欢笑，勇敢的去追寻自己的梦想，创造一个美好的未来，做一个有责任心的男子汉，人生的路途会遇到一些坑坑凹凹，你要记住老爸是你坚强的后盾，最后祝儿子工作顺利，事业有成，夫妻恩爱，永远幸福。
                            </p>
                            <p class="text-right mt-4 text-coffee-light italic">- 爱你的老爸</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,

    milestone: `
    <section id="milestone" class="section py-24">
        <div class="max-w-5xl mx-auto fade-in">
            <h2 class="text-4xl font-bold mb-4 text-center text-coffee-dark">里程</h2>
            <p class="text-center text-coffee/60 mb-12">至死不渝的里程，需要一座不断刻印着的纪念碑</p>
            
            <div class="relative">
                <!-- 时间轴中心线 -->
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-coffee/20"></div>
                
                <div class="space-y-12">
                    <!-- 2016 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8 text-right">
                            <div class="text-2xl font-bold text-coffee-dark">2016</div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2016.jpg" alt="2016年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2016年的我们-相遇</h3>
                                <p class="text-coffee/80">我们开始于这部电影，虽然忘记了剧情，从此我好像就爱上了冬天</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2017 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2017.jpg" alt="2017年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2017年的我们-热恋</h3>
                                <p class="text-coffee/80">还记得我们第一次穿情侣装吗？看了好久也没舍得买的热风羽绒服</p>
                            </div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8 text-left">
                            <div class="text-2xl font-bold text-coffee-dark">2017</div>
                        </div>
                    </div>

                    <!-- 2018 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8 text-right">
                            <div class="text-2xl font-bold text-coffee-dark">2018</div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2018.jpg" alt="2018年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2018年的我们-成长</h3>
                                <p class="text-coffee/80">我一个人来北京实习了，这座钢铁森林异常冰冷。但是想起你在国庆节突然来找我给我惊喜，那种开心现在都难以忘记.</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2019 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2019.jpg" alt="2019年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2019年的我们-依靠</h3>
                                <p class="text-coffee/80">小学弟毕业啦！我们一起正式开启北漂生活，相依为命</p>
                            </div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8 text-left">
                            <div class="text-2xl font-bold text-coffee-dark">2019</div>
                        </div>
                    </div>

                    <!-- 2020 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8 text-right">
                            <div class="text-2xl font-bold text-coffee-dark">2020</div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2020.jpg" alt="2020年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2020年的我们-向上</h3>
                                <p class="text-coffee/80">生活越来越好了，为了给你庆祝生日策划了惊喜寻宝（虽然记错了日期）</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2021 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2021.jpg" alt="2021年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2021年的我们-诺言</h3>
                                <p class="text-coffee/80">我们结婚了，一切就这么顺其自然的发生和进行，一起用一生兑现至死不渝的诺言</p>
                            </div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8 text-left">
                            <div class="text-2xl font-bold text-coffee-dark">2021</div>
                        </div>
                    </div>

                    <!-- 2022 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8 text-right">
                            <div class="text-2xl font-bold text-coffee-dark">2022</div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2022.jpg" alt="2022年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2022年的我们-忙碌</h3>
                                <p class="text-coffee/80">这一年我们都好忙好忙，但是看见你为了奶奶按照摄像头的样子，我还是心跳停了一拍.</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2023 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2023.jpg" alt="2023年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2023年的我们-买房</h3>
                                <p class="text-coffee/80">我们有了真正属于我们自己的家，这个家带给我的幸福感是无法比拟的，更加用心的去经营我们的生活.</p>
                            </div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8 text-left">
                            <div class="text-2xl font-bold text-coffee-dark">2023</div>
                        </div>
                    </div>

                    <!-- 2024 -->
                    <div class="relative flex items-center justify-between group">
                        <div class="w-5/12 pr-8 text-right">
                            <div class="text-2xl font-bold text-coffee-dark">2024</div>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coffee rounded-full border-4 border-cream flex items-center justify-center">
                            <div class="w-2 h-2 bg-cream rounded-full"></div>
                        </div>
                        <div class="w-5/12 pl-8">
                            <div class="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl">
                                <img src="public/milestone/2024.jpg" alt="2024年照片" 
                                     class="w-full h-48 object-cover rounded-lg mb-4">
                                <h3 class="text-xl font-bold text-coffee-dark mb-2">2024年的我们-八年</h3>
                                <p class="text-coffee/80">第八年，我们两个拥有了新的身份。尽管你要当爸爸了，但是在我这里你还是可以做你的小男孩。我会永远用温暖去拥抱你。你总说我没出息，但是一想到可以一辈子和你散很多步、吃很多饭，我就会不由自主的幸福的笑起来</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,

record: `
    <section id="record" class="section py-24">
        <div class="max-w-4xl mx-auto fade-in">
            <!-- 标题区域添加发光效果 -->
            <h2 class="text-4xl font-bold mb-4 text-center text-coffee-dark animate-pulse">记录</h2>
            <p class="text-center text-coffee/60 mb-12 backdrop-blur-sm bg-white/10 p-4 rounded-xl">希望在未来的某些时刻，点开这个网站，你可以深呼吸的休息一下</p>
            
            <!-- 留言输入区域 - 优化毛玻璃效果 -->
            <div class="bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-lg mb-12 border border-white/30 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                <form id="messageForm" class="space-y-6">
                    <div>
                        <label for="name" class="block text-coffee-dark mb-2 font-medium">你的名字</label>
                        <input type="text" id="name" name="name" 
                               class="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 focus:border-coffee/30 focus:ring-2 focus:ring-coffee/20 outline-none transition-all hover:bg-white/60"
                               placeholder="请输入你的名字（选填）">
                    </div>
                    <div>
                        <label for="message" class="block text-coffee-dark mb-2 font-medium">你的留言</label>
                        <textarea id="message" name="message" rows="4" 
                                  class="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 focus:border-coffee/30 focus:ring-2 focus:ring-coffee/20 outline-none transition-all hover:bg-white/60"
                                  placeholder="写下你想说的话..."></textarea>
                    </div>
                    <button type="submit" 
                            class="w-full bg-coffee/80 backdrop-blur-sm text-cream-light py-3 rounded-lg hover:bg-coffee-dark transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                        发送留言
                    </button>
                </form>
            </div>

            <!-- 生日蛋糕和祝福语 - 添加玻璃容器效果 -->
            <div class="mt-16">
                <div class="cake-container bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300">
                    <div class="cake">
                        <div class="frosting"></div>
                        <div class="sprinkles">
                            ${Array(20).fill().map((_, i) => `
                                <div class="sprinkle" style="
                                    top: ${Math.random() * 100}%;
                                    left: ${Math.random() * 100}%;
                                    background: ${['#87CEEB', '#FFB7C5', '#98FB98', '#DDA0DD'][Math.floor(Math.random() * 4)]};
                                    transform: rotate(${Math.random() * 360}deg);
                                "></div>
                            `).join('')}
                        </div>
                        <div class="candles">
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                        </div>
                        <div class="star1 stars"></div>
                        <div class="star2 stars"></div>
                    </div>
                </div>
                
                <!-- 生日祝福 - 添加发光文字效果 -->
                <p class="mt-8 text-4xl font-bold text-center animate-pulse" 
                   style="font-family: 'AlibabaPuHuiTi-Bold', sans-serif; 
                          background: linear-gradient(45deg, #FFB7C5, #FF69B4, #FFB7C5);
                          -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent;
                          text-shadow: 0 0 20px rgba(255,183,197,0.5);
                          letter-spacing: 2px;">
                    祝全世界最好的马龙生日快乐～
                </p>
            </div>
        </div>
    </section>
`
};

    function draw(words) {
        d3.select("#wordCloud").select("svg").remove();
        
        const svg = d3.select("#wordCloud").append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1]);

        const cloud = svg.append("g")
            .attr("transform", `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`);

        cloud.selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-family", fontFamily)
            .style("fill", () => d3.rgb(
                Math.random() * 100 + 155,
                Math.random() * 100 + 155,
                Math.random() * 100 + 155
            ))
            .attr("text-anchor", "middle")
            .style("font-size", d => `${d.size}px`)
            .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
            .text(d => d.text);
    }

// 处理留言表单提交
function handleMessageSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value || '匿名';
    const message = document.getElementById('message').value;

    if (!message.trim()) {
        alert('请输入留言内容');
        return;
    }

    // 这里应该发送到后端保存
    console.log('新留言:', { name, message });

    // 清空表单
    document.getElementById('messageForm').reset();

    // 刷新词云（实际应用中应该重新从后端获取数据）
    initWordCloud();
}

// 初始化 Swiper
function initSwiper() {
    new Swiper(".mySwiper", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// 处理导航和页面初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始加载瞬间页面
    document.getElementById('content').innerHTML = pages.moment;
    initSwiper();

    // 处理导航点击
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            document.getElementById('content').innerHTML = pages[section];
            
            // 根据不同页面初始化不同功能
            if (section === 'moment') {
                setTimeout(initSwiper, 0);
            } else if (section === 'record') {
                setTimeout(() => {
                    initWordCloud();
                    document.getElementById('messageForm').addEventListener('submit', handleMessageSubmit);
                }, 0);
            }
        });
    });
});