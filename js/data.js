var data = [
{"name":"姉川大輔","affiliation":"薬学系研究科薬科学専攻","title":"ネコはどうしてあったかいのか？","abstract":"ネコをなでるとあったかいのはどうして？心のつながりを感じるから？いいえ、それはネコが恒温動物だからです。ヒトを含む恒温動物は常に体をあったかく保っていますが、それはなぜでしょう？体温に残された謎と最新の研究を紹介します。"},
{"name":"五十嵐健祐","affiliation":"薬学系研究科薬科学専攻","title":"防衛ライン最前線 〜外敵と闘う細胞〜","abstract":"細菌やウイルスといった外敵と戦う「免疫細胞」。戦いの最前線ではどのようなことが起こっているのでしょうか？最新の研究で可視化することに成功した、外敵を見つけた免疫細胞が起こす反応の一端を、今回皆様にご覧いただきます。"},
{"name":"岩崎慎太郎","affiliation":"情報理工学系研究科電子情報学専攻","title":"速くなり続ける？コンピュータ","abstract":"身の回りにあふれるコンピュータ、その計算性能は、年々上がり続けています。今後も本当に上がり続けるのか、私の研究しているスーパーコンピュータから考えます。"},
{"name":"岩谷舟真","affiliation":"人文社会系研究科社会心理学専攻","title":"分断を心理学する（できるのか？)","abstract":"先日、新感染という映画（面白かった！）を見ていると、裕福な主人公が勝手な人として描かれていました。これは映画だけの話なのか。実際に裕福な人ほど勝手なのか。一見単純なこの問いに対する心理学の挑戦を伝えます（面白いはず…！）"},
{"name":"宇佐美こすも","affiliation":"総合文化研究科超域文化科学専攻","title":"歴史学入門Ⅰ　時代考証編","abstract":"歴史学の成果は「時代考証」として娯楽の役に立っているけれど、その逆はどうだろう？むかしの日記と現代の時代劇を見比べながら、みなさんで考えてみませんか。本講義は学問×娯楽からみえる最先端をご紹介します。"},
{"name":"宇佐美こすも","affiliation":"総合文化研究科超域文化科学専攻","title":"歴史学入門Ⅱ　絵巻物編","abstract":"最近よく展示される絵巻物、でも解説や予備知識がないと楽しめない？いいえ、むかしの社会のルールを知れば、物語を知らない絵巻物も楽しく鑑賞できちゃいます！本講義は、歴史学×美術×文学の最先端をご紹介します。"},
{"name":"宇佐美尚人","affiliation":"工学系研究科電気系工学専攻","title":"米粒みたいなロボット、どう作る？","abstract":"米粒くらいの大きさの、いわゆるマイクロロボットは映画やアニメで大活躍していますが、果たしてどうすれば実現できるのでしょうか。そのヒントはあなたの手元にある…"},
{"name":"永澤彩","affiliation":"工学系研究科科学生命工学専攻","title":"窒素ガスからアンモニアを作る","abstract":"アンモニアはとても臭くて敬遠されがちな物質ですが、実はアンモニアなしには私たちは生きていけません。そんなアンモニアを空気中の成分である窒素ガスから作る方法をご紹介します。"},
{"name":"岡島悟","affiliation":"理学系研究科地球惑星科学専攻","title":"あたらしい海の測り方","abstract":"「海を測る」と聞いて、皆さんはどのような方法を想像するでしょうか。船とバケツと温度計？それも正解ですが、最近は色々な方法があるんです。新しい海洋観測の方法と、それらのデータを利用した最新の研究を皆さんにご紹介します。"},
{"name":"鍵谷怜","affiliation":"総合文化研究科超域文化科学専攻","title":"韓国・現代・美術 〜「単色画」と日本〜","abstract":"「韓国の現代美術」と聞いて、皆さんはどのようなことを想像するでしょうか。本講義では、今世界で注目を集めつつある、「単色画」という韓国の美術をご紹介します。そこから現代美術との向き合い方を考えていきましょう。"},
{"name":"木口悠也","affiliation":"早稲田大学大学院 先進理工学研究科","title":"腸内フローラと考える","abstract":"腸内フローラが脳に影響を与え、我々の気分や行動に影響を与えている可能性が明らかになりつつあります。そんな驚きの研究成果について自分の腸内フローラと一緒に考えましょう。"},
{"name":"杉山 昂平","affiliation":"学際情報学府学際情報学専攻","title":"家族写真が生まれた頃","abstract":"記念日に家族で集まり、撮った写真をアルバムに残す――家族写真という営みは、実は写真の発明よりも後になって登場しました。なぜ家族写真は生まれたのか？この問いをたどりながら、日常生活とテクノロジーの関係について考えます。"},
{"name":"鈴木良平","affiliation":"情報理工学系研究科コンピュータ科学専攻\n 物理学科","title":"コンピュータは知恵熱を出すか？","abstract":"パソコンを使っているときに熱が出るのは当たり前のような気がします。では、極限まで省エネを追求すれば排熱はどこまでも小さくできるのでしょうか。その限界を考えると、情報とエネルギーを結びつける不思議な物理学に出会います。"},
{"name":"野田夏実","affiliation":"理学系研究科地球惑星科学専攻","title":"宇宙をみあげて、生命にせまれるか。","abstract":"地球は、私たちが知る限り唯一の「生命の星」。探査技術が発達し、「地球外生命に繋がる重大発表」がたびたび報道される今でも、生命そのものは未検出です。では、研究者は何を探し、何を見つけているのでしょうか？"},
{"name":"濱崎立資","affiliation":"理学系研究科物理学専攻","title":"時間は結晶化するか？","abstract":"少し前に、こんな科学記事が話題になりました：「物理学者が『時間結晶』の実験に成功した！」　さて、一体何が実現されたというのでしょうか？"},
{"name":"林徹","affiliation":"工学系研究科応用化学専攻","title":"のぞこう！電気と生命の関わり","abstract":"電気はとても人工的で、発電機を使わないと簡単に作れないと思っていませんか？実は電気は簡単に作れます。私たちの体も「電気」の力で生きています。自然界に流れる電気と生命の明らかになりつつある関わりを、一緒に覗いてみましょう。"},
{"name":"福田朝","affiliation":"理学系研究科","title":"対称性と素粒子物理学","abstract":"現代の素粒子物理学を理解する上での大きな鍵が対称性です。対称性とは何か、どのように使われてきたかを振り返りながら、素粒子物理学での未解決問題と対称性の関わりについて紹介していきます。"},
{"name":"藤嶋陽子","affiliation":"学際情報学府学際情報学専攻","title":"ミュージアムは何の／誰のための場所？","abstract":"最近のミュージアムでは、アニメやファッションといった新しいジャンルの展示が増えています。こうした新たな展示物によって、モノの価値とミュージアムという場所の意味や役割がどのように変わったのかを考えます。"},
{"name":"前嶋直樹","affiliation":"人文社会系研究科","title":"インターネットは社会を分断するのか？","abstract":"「インターネットは社会的分断を引き起こす」とよく言われます。ですが実際のところ、インターネットは私たちの「つながり」にどう影響するのでしょうか？フィールドワークの結果をもとにお話します。"},
{"name":"村松祐記子","affiliation":"薬学系研究科","title":"私達のからだはどうやって作られる？","abstract":"私たちは生まれる前、約10ヶ月の時をお母さんのお腹の中で過ごします。はじめはなにもないところから、私たちの体は、どうやって形成されるのでしょうか？"},
{"name":"米村美紀","affiliation":"工学系研究科建築学専攻","title":"騒音を聴いてみる","abstract":"今こうして文字を読んでいるときも、世界は沢山の音で埋め尽くされていますよね。でも、隣にいる人とまったく同じ音を聞いていても、何を騒音と感じるかは違うかもしれません。こんな「騒音」を科学的に考えるための手法をご紹介します。"}
];
