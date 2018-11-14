<map version="freeplane 1.3.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="gitdig_usm" FOLDED="false" ID="ID_1723255651" CREATED="1283093380553" MODIFIED="1542014041506">
<hook NAME="AutomaticEdgeColor" COUNTER="4"/>
<edge COLOR="#808080"/>
<hook NAME="MapStyle">
    <properties show_icon_for_attributes="true" show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node">
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right">
<stylenode LOCALIZED_TEXT="default" MAX_WIDTH="600" COLOR="#000000" STYLE="as_parent">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.note"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
<cloud COLOR="#f0f0f0" SHAPE="ARC"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
<cloud COLOR="#f0f0f0" SHAPE="ARC"/>
</stylenode>
<stylenode TEXT="lsyh" COLOR="#990000">
<font NAME="SansSerif" SIZE="10" BOLD="true"/>
<edge COLOR="#808080"/>
</stylenode>
<stylenode TEXT="home" COLOR="#215800">
<font SIZE="10" BOLD="true"/>
</stylenode>
<stylenode TEXT="ohome" COLOR="#120088" BACKGROUND_COLOR="#fdfd51">
<font NAME="SansSerif" SIZE="12" BOLD="true"/>
<cloud COLOR="#fdfd51" SHAPE="ROUND_RECT"/>
<edge COLOR="#808080"/>
</stylenode>
<stylenode TEXT="activity" COLOR="#102292" BACKGROUND_COLOR="#88d8d9" STYLE="bubble">
<font SIZE="12" BOLD="true"/>
</stylenode>
<stylenode TEXT="goal" BACKGROUND_COLOR="#b6e174">
<font BOLD="true"/>
</stylenode>
<stylenode TEXT="activityDetailHiPrio" BACKGROUND_COLOR="#e9f664">
<font BOLD="true"/>
</stylenode>
<stylenode TEXT="activityDetailLoPrio" BACKGROUND_COLOR="#f4f8d3"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font NAME="Monospaced" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font BOLD="true"/>
<edge COLOR="#808080"/>
<cloud COLOR="#f0f0f0" SHAPE="ARC"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font NAME="SansSerif" SIZE="10"/>
</stylenode>
</stylenode>
</stylenode>
</map_styles>
</hook>
<node TEXT="" POSITION="right" ID="ID_1670358467" CREATED="1520139829031" MODIFIED="1520494049400">
<edge COLOR="#808080"/>
<node TEXT="legend" FOLDED="true" ID="ID_737831229" CREATED="1520493781952" MODIFIED="1520493784044">
<node TEXT="Main Activity" STYLE_REF="activity" ID="ID_308101867" CREATED="1520493904408" MODIFIED="1520493955915">
<node TEXT="Goal-level Activity" STYLE_REF="goal" ID="ID_846205330" CREATED="1520493935385" MODIFIED="1539776446347">
<node TEXT="(Sub)Activity,&#xa;High Prio" STYLE_REF="activityDetailHiPrio" ID="ID_1802054139" CREATED="1520493958162" MODIFIED="1520603437587">
<node TEXT="(Sub)Activity" STYLE_REF="activityDetailHiPrio" ID="ID_1111944986" CREATED="1520493958162" MODIFIED="1520493967782">
<node TEXT="(Sub)Activity" STYLE_REF="activityDetailHiPrio" FOLDED="true" ID="ID_1566299983" CREATED="1520493958162" MODIFIED="1520493967782">
<node TEXT="Screenshot" LOCALIZED_STYLE_REF="default" FOLDED="true" ID="ID_950269260" CREATED="1520313328951" MODIFIED="1520494091547">
<icon BUILTIN="video"/>
<node TEXT="" ID="ID_1039037170" CREATED="1520347439368" MODIFIED="1520347457623" LINK="https://projects.invisionapp.com/share/HPFWXO7N67F#/screens/279296838">
<hook URI="wat_welcome.png" SIZE="1.0" NAME="ExternalObject"/>
</node>
</node>
<node TEXT="data details" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1232191645" CREATED="1520237711657" MODIFIED="1520494253120">
<node TEXT="messages" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_534809770" CREATED="1520494253896" MODIFIED="1520494262405"/>
<node TEXT="schemas" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1830557443" CREATED="1520494256233" MODIFIED="1520494262403"/>
<node TEXT="etc." LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1570194783" CREATED="1520494259517" MODIFIED="1520494262399"/>
</node>
<node TEXT="Communication&#xa;(REST call, publish, subs, etc.)&#xa;GET /game/rounds/{category}/next" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_665411990" CREATED="1520142165332" MODIFIED="1520603387729">
<node TEXT="wat-be config:" ID="ID_491717763" CREATED="1520249627330" MODIFIED="1520249633943">
<node TEXT="numQuestions: 20&#xa;playTime: 60" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_417982178" CREATED="1520249482915" MODIFIED="1520249626036"/>
</node>
<node TEXT="req:" ID="ID_1703333501" CREATED="1520249554822" MODIFIED="1520249556740">
<node TEXT="category: &quot;Fun Facts&quot;" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_491328958" CREATED="1520249578886" MODIFIED="1520249603002"/>
</node>
<node TEXT="resp:" ID="ID_1925430968" CREATED="1520249552304" MODIFIED="1520249554316">
<node TEXT="200" OBJECT="java.lang.Long|200" ID="ID_337548950" CREATED="1520249662387" MODIFIED="1520249663933">
<node TEXT="language: EN&#xa;category: Fun Facts&#xa;playTime: 60&#xa;questions:&#xa;- ...." LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_809335651" CREATED="1520246624639" MODIFIED="1520246636900"/>
</node>
<node TEXT="40X" LOCALIZED_STYLE_REF="default" ID="ID_532710909" CREATED="1520142168160" MODIFIED="1520249676044">
<node TEXT="wrong or missing category name" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1039797646" CREATED="1520249688800" MODIFIED="1520249698124"/>
<node TEXT="more questions left in this category" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_997983145" CREATED="1520249678296" MODIFIED="1520249698480"/>
</node>
</node>
<node TEXT="Create endpoint descriptor with mock data" LOCALIZED_STYLE_REF="default" ID="ID_229092275" CREATED="1520494641604" MODIFIED="1520603392148">
<icon BUILTIN="list"/>
</node>
<node TEXT="Create microservice for endpoint implementation" LOCALIZED_STYLE_REF="default" ID="ID_1362251284" CREATED="1520494704714" MODIFIED="1520603392610">
<icon BUILTIN="list"/>
</node>
<node TEXT="..." LOCALIZED_STYLE_REF="default" ID="ID_1670563078" CREATED="1520494739711" MODIFIED="1520603393138">
<icon BUILTIN="list"/>
</node>
</node>
<node TEXT="Story level JIRA issue" LOCALIZED_STYLE_REF="default" ID="ID_658413280" CREATED="1520494641604" MODIFIED="1520603370818">
<icon BUILTIN="list"/>
<node TEXT="Task level JIRA issue" ID="ID_984343306" CREATED="1520603332864" MODIFIED="1520603342404">
<icon BUILTIN="executable"/>
</node>
<node TEXT="Task level JIRA issue" ID="ID_950143506" CREATED="1520603332864" MODIFIED="1520603342404">
<icon BUILTIN="executable"/>
</node>
<node TEXT="Task level JIRA issue" ID="ID_314331" CREATED="1520603332864" MODIFIED="1520603342404">
<icon BUILTIN="executable"/>
</node>
</node>
</node>
<node TEXT="(Sub)Activity" STYLE_REF="activityDetailHiPrio" ID="ID_247595490" CREATED="1520493958162" MODIFIED="1520493967782"/>
</node>
<node TEXT="(Sub)Activity, Low Prio" STYLE_REF="activityDetailLoPrio" FOLDED="true" ID="ID_1651183766" CREATED="1520493958162" MODIFIED="1520493998044">
<node TEXT="(Sub)Activity, Low Prio" STYLE_REF="activityDetailLoPrio" ID="ID_1692114228" CREATED="1520493958162" MODIFIED="1520493998044"/>
<node TEXT="(Sub)Activity, Low Prio" STYLE_REF="activityDetailLoPrio" ID="ID_1068914320" CREATED="1520493958162" MODIFIED="1520493998044"/>
</node>
<node TEXT="(Sub)Activity" STYLE_REF="activityDetailHiPrio" ID="ID_63503270" CREATED="1520493958162" MODIFIED="1520493967782"/>
</node>
<node TEXT="(Sub)Activity" STYLE_REF="activityDetailHiPrio" ID="ID_951391324" CREATED="1520493958162" MODIFIED="1520493967782"/>
</node>
</node>
<node TEXT="action,&#xa;send/receive message&#xa;REST call" STYLE_REF="lsyh" ID="ID_1105223393" CREATED="1526543473449" MODIFIED="1526543540096"/>
<node TEXT="data" STYLE_REF="home" ID="ID_1494064599" CREATED="1526543504595" MODIFIED="1526543511357"/>
<node TEXT="selector" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1322977737" CREATED="1526543506082" MODIFIED="1526543509332"/>
<node TEXT="notes, comments" ID="ID_1065101989" CREATED="1526543553904" MODIFIED="1526543575638"/>
</node>
<node TEXT="P/S" ID="ID_1683034325" CREATED="1542015099450" MODIFIED="1542015105931">
<node TEXT="1" OBJECT="java.lang.Long|1" FOLDED="true" ID="ID_156733402" CREATED="1542015620303" MODIFIED="1542015621680">
<node TEXT="P" STYLE_REF="lsyh" ID="ID_570661220" CREATED="1542015614910" MODIFIED="1542016017973">
<node TEXT="Difficult to follow creation and changes of too many repositories during the development" STYLE_REF="lsyh" ID="ID_1598174516" CREATED="1542015153271" MODIFIED="1542015551460">
<node TEXT="There are too many repositories that is made of even a smaller or medium size project." STYLE_REF="lsyh" ID="ID_528327539" CREATED="1542015106684" MODIFIED="1542015558336"/>
<node TEXT="Continuously adding new repos to the project" STYLE_REF="lsyh" ID="ID_1743371030" CREATED="1542015157555" MODIFIED="1542015558345"/>
<node TEXT="Difficult to detect/follow the connections and dependencies among the repositories." STYLE_REF="lsyh" ID="ID_1429097787" CREATED="1542016600193" MODIFIED="1542016626017"/>
</node>
</node>
<node TEXT="S" STYLE_REF="home" ID="ID_1634868098" CREATED="1542015617663" MODIFIED="1542016017173">
<node TEXT="Automatic repository scan" STYLE_REF="home" ID="ID_1806624974" CREATED="1542015560430" MODIFIED="1542015611365"/>
<node TEXT="Find repositories corresponding to a specific product/project" STYLE_REF="home" ID="ID_1990229310" CREATED="1542015587241" MODIFIED="1542015611361"/>
</node>
</node>
<node TEXT="2" OBJECT="java.lang.Long|2" FOLDED="true" ID="ID_845931866" CREATED="1542015629614" MODIFIED="1542015630710">
<node TEXT="P" STYLE_REF="lsyh" ID="ID_1991272232" CREATED="1542015636255" MODIFIED="1542016018916">
<node TEXT="Difficult to control the selection of 3rd party libraries" STYLE_REF="lsyh" ID="ID_164550867" CREATED="1542015383388" MODIFIED="1542015744658">
<node TEXT="There are new libraries can be used, and anyone can add new dependencies by chance as well" ID="ID_1424506542" CREATED="1542015682703" MODIFIED="1542015713807"/>
</node>
<node TEXT="There are upgrades on used libraries that is timeconsuming to find manually" STYLE_REF="lsyh" ID="ID_1303460682" CREATED="1542015752258" MODIFIED="1542015780149"/>
<node TEXT="Difficut to gain information about used technologies among several projects and products" STYLE_REF="lsyh" ID="ID_1869911714" CREATED="1542023374665" MODIFIED="1542023412134"/>
</node>
<node TEXT="S" STYLE_REF="home" ID="ID_1358221987" CREATED="1542015637853" MODIFIED="1542016015733">
<node TEXT="Automatic control over the used libraries and modules" STYLE_REF="home" ID="ID_893282133" CREATED="1542015286969" MODIFIED="1542015751173">
<node TEXT="notification in case of patches, and minor/major upgrades" STYLE_REF="home" ID="ID_1194084328" CREATED="1542015788263" MODIFIED="1542015810275"/>
<node TEXT="dependency analysis" STYLE_REF="home" ID="ID_1152823370" CREATED="1542015307237" MODIFIED="1542015435405"/>
<node TEXT="blacklist" STYLE_REF="home" ID="ID_1960098949" CREATED="1542015313370" MODIFIED="1542015435673"/>
<node TEXT="whitelist" STYLE_REF="home" ID="ID_564614135" CREATED="1542015315669" MODIFIED="1542015435966"/>
</node>
<node TEXT="Collect information and provide reports on used technologies based on tagging, and other categorization info." STYLE_REF="home" ID="ID_721453172" CREATED="1542023414320" MODIFIED="1542023455963"/>
</node>
</node>
<node TEXT="3" OBJECT="java.lang.Long|3" FOLDED="true" ID="ID_1377615791" CREATED="1542015999873" MODIFIED="1542016001219">
<node TEXT="P" STYLE_REF="lsyh" ID="ID_744095253" CREATED="1542016008514" MODIFIED="1542016013652">
<node TEXT="Documentation is difficult to maintain" STYLE_REF="lsyh" ID="ID_972523518" CREATED="1542015321915" MODIFIED="1542016249475"/>
<node TEXT="Difficult to find and navigate among docs, and other artifacts" STYLE_REF="lsyh" ID="ID_1654492317" CREATED="1542016058898" MODIFIED="1542016249221"/>
</node>
<node TEXT="S" STYLE_REF="home" ID="ID_535079430" CREATED="1542016010561" MODIFIED="1542016014115">
<node TEXT="Add and collect meta-info" STYLE_REF="home" ID="ID_1531099161" CREATED="1542026332836" MODIFIED="1542026344530">
<node TEXT="Use the source code as the only source of truth" STYLE_REF="home" ID="ID_1311443633" CREATED="1542016150087" MODIFIED="1542016247785"/>
<node TEXT="Keep meta-info as close to source as possible" STYLE_REF="home" ID="ID_453087996" CREATED="1542016161903" MODIFIED="1542016247779"/>
<node TEXT="Use meta info available anyway (no additional redundant info that must be maintained by hand)." STYLE_REF="home" ID="ID_857260301" CREATED="1542016171735" MODIFIED="1542016247765"/>
<node TEXT="Extend existing meta-files if possible" STYLE_REF="home" ID="ID_899270856" CREATED="1542016137390" MODIFIED="1542016247752"/>
<node TEXT="Add .gitidig.yml in case if really necessary." STYLE_REF="home" ID="ID_348020600" CREATED="1542016225919" MODIFIED="1542016247747"/>
<node TEXT="Gain info from the standard artifacts (package.json, pom.xml, and other existing meta-files available anyway." STYLE_REF="home" ID="ID_292920978" CREATED="1542016090535" MODIFIED="1542016247753"/>
</node>
<node TEXT="Generate on-line docs (incl. central nav. page) to" STYLE_REF="home" ID="ID_71394027" CREATED="1542024490011" MODIFIED="1542024968091">
<node TEXT="Overall project/product description" STYLE_REF="home" ID="ID_1173354880" CREATED="1542023903752" MODIFIED="1542024974258"/>
<node TEXT="System architecture and configuration" STYLE_REF="home" ID="ID_81391933" CREATED="1542023802660" MODIFIED="1542024974257"/>
<node TEXT="Module APIs" STYLE_REF="home" ID="ID_78975406" CREATED="1542023885810" MODIFIED="1542024974257"/>
<node TEXT="Test data" STYLE_REF="home" ID="ID_1752651712" CREATED="1542023958181" MODIFIED="1542024974257"/>
<node TEXT="Environments and their setup" STYLE_REF="home" ID="ID_563240669" CREATED="1542023964068" MODIFIED="1542024974257"/>
<node TEXT="Build and Deployment" STYLE_REF="home" ID="ID_239875500" CREATED="1542023853077" MODIFIED="1542024974256"/>
<node TEXT="Operation Manual" STYLE_REF="home" ID="ID_1521924819" CREATED="1542023810601" MODIFIED="1542024974256"/>
<node TEXT="CI/CD environment" STYLE_REF="home" ID="ID_1719336932" CREATED="1542023922359" MODIFIED="1542024974254"/>
</node>
<node TEXT="Automatize everything" STYLE_REF="home" ID="ID_1731648482" CREATED="1542015342587" MODIFIED="1542016247789"/>
</node>
</node>
<node TEXT="4" OBJECT="java.lang.Long|4" FOLDED="true" ID="ID_658883705" CREATED="1542016028286" MODIFIED="1542016029001">
<node TEXT="P" STYLE_REF="lsyh" ID="ID_1321403096" CREATED="1542016260593" MODIFIED="1542016262964">
<node TEXT="QA must be built-into the process" STYLE_REF="lsyh" ID="ID_656329945" CREATED="1542015206169" MODIFIED="1542016253942"/>
</node>
<node TEXT="S" STYLE_REF="home" ID="ID_865937062" CREATED="1542016263395" MODIFIED="1542016265028">
<node TEXT="Check, if there are appropriate QA tools available and used in projects" STYLE_REF="home" ID="ID_430944226" CREATED="1542023580531" MODIFIED="1542023669534">
<node TEXT="static code analysis" STYLE_REF="home" ID="ID_1964565976" CREATED="1542023640355" MODIFIED="1542023670899"/>
<node TEXT="automated tests" STYLE_REF="home" ID="ID_733044600" CREATED="1542023645099" MODIFIED="1542023670501"/>
</node>
<node TEXT="Check if test coverage is checked and reaches the required level" STYLE_REF="home" ID="ID_1561485008" CREATED="1542023650241" MODIFIED="1542023669132"/>
</node>
</node>
<node TEXT="5" OBJECT="java.lang.Long|5" FOLDED="true" ID="ID_338060189" CREATED="1542016029872" MODIFIED="1542016030755">
<node TEXT="P" STYLE_REF="lsyh" ID="ID_1026214999" CREATED="1542016256386" MODIFIED="1542016259510">
<node TEXT="Security risk analysis and mitigation must be built-into the process" STYLE_REF="lsyh" ID="ID_139584930" CREATED="1542015226521" MODIFIED="1542016254788"/>
</node>
<node TEXT="S" STYLE_REF="home" ID="ID_767971713" CREATED="1542016265730" MODIFIED="1542016268564">
<node TEXT="Check used libraries using on-line vulnerability databases" STYLE_REF="home" ID="ID_316267973" CREATED="1542023549509" MODIFIED="1542023576964"/>
</node>
</node>
<node TEXT="" FOLDED="true" ID="ID_1634638394" CREATED="1542027790145" MODIFIED="1542027905546">
<node TEXT="Annotate, Collect, Classify" ID="ID_263098061" CREATED="1542027978464" MODIFIED="1542028226364">
<node TEXT="Collect information and provide reports on used technologies based on tagging, and other categorization info." STYLE_REF="home" ID="ID_1099614012" CREATED="1542023414320" MODIFIED="1542023455963"/>
<node TEXT="Add and collect meta-info" STYLE_REF="home" ID="ID_351383020" CREATED="1542026332836" MODIFIED="1542026344530">
<node TEXT="Use the source code as the only source of truth" STYLE_REF="home" ID="ID_1588686392" CREATED="1542016150087" MODIFIED="1542016247785"/>
<node TEXT="Keep meta-info as close to source as possible" STYLE_REF="home" ID="ID_1545263823" CREATED="1542016161903" MODIFIED="1542016247779"/>
<node TEXT="Use meta info available anyway (no additional redundant info that must be maintained by hand)." STYLE_REF="home" ID="ID_622330338" CREATED="1542016171735" MODIFIED="1542016247765"/>
<node TEXT="Extend existing meta-files if possible" STYLE_REF="home" ID="ID_1896894924" CREATED="1542016137390" MODIFIED="1542016247752"/>
<node TEXT="Add .gitidig.yml in case if really necessary." STYLE_REF="home" ID="ID_248257324" CREATED="1542016225919" MODIFIED="1542016247747"/>
<node TEXT="Gain info from the standard artifacts (package.json, pom.xml, and other existing meta-files available anyway." STYLE_REF="home" ID="ID_1501093357" CREATED="1542016090535" MODIFIED="1542016247753"/>
</node>
<node TEXT="Automatic repository scan" STYLE_REF="home" ID="ID_689292935" CREATED="1542015560430" MODIFIED="1542015611365"/>
<node TEXT="Find repositories corresponding to" STYLE_REF="home" ID="ID_1119694428" CREATED="1542015587241" MODIFIED="1542027809304">
<node TEXT="a specific product/project" ID="ID_1650490067" CREATED="1542027809836" MODIFIED="1542027809836"/>
<node TEXT="none (an orphan, just hanging around alone)" ID="ID_841594634" CREATED="1542027810937" MODIFIED="1542027832733"/>
</node>
</node>
<node TEXT="Check quality and vulnerability" ID="ID_58831228" CREATED="1542028008288" MODIFIED="1542028253288">
<node TEXT="Automatic control over the used libraries and modules" STYLE_REF="home" ID="ID_225011733" CREATED="1542015286969" MODIFIED="1542015751173">
<node TEXT="notification in case of patches, and minor/major upgrades" STYLE_REF="home" ID="ID_1148074350" CREATED="1542015788263" MODIFIED="1542015810275"/>
<node TEXT="dependency analysis" STYLE_REF="home" ID="ID_545609478" CREATED="1542015307237" MODIFIED="1542015435405"/>
<node TEXT="blacklist" STYLE_REF="home" ID="ID_637755687" CREATED="1542015313370" MODIFIED="1542015435673"/>
<node TEXT="whitelist" STYLE_REF="home" ID="ID_1672558730" CREATED="1542015315669" MODIFIED="1542015435966"/>
</node>
<node TEXT="Check, if there are appropriate QA tools available and used in projects" STYLE_REF="home" ID="ID_1317416796" CREATED="1542023580531" MODIFIED="1542023669534">
<node TEXT="static code analysis" STYLE_REF="home" ID="ID_1166051116" CREATED="1542023640355" MODIFIED="1542023670899"/>
<node TEXT="automated tests" STYLE_REF="home" ID="ID_364982816" CREATED="1542023645099" MODIFIED="1542023670501"/>
</node>
<node TEXT="Check if test coverage is checked and reaches the required level" STYLE_REF="home" ID="ID_1465876610" CREATED="1542023650241" MODIFIED="1542023669132"/>
<node TEXT="Check used libraries using on-line vulnerability databases" STYLE_REF="home" ID="ID_1139804040" CREATED="1542023549509" MODIFIED="1542023576964"/>
</node>
<node TEXT="Documenting, and navigation" ID="ID_23739973" CREATED="1542028256030" MODIFIED="1542028262017">
<node TEXT="Generate on-line docs (incl. central nav. page) to" STYLE_REF="home" ID="ID_1087653730" CREATED="1542024490011" MODIFIED="1542024968091">
<node TEXT="Overall project/product description" STYLE_REF="home" ID="ID_1611831231" CREATED="1542023903752" MODIFIED="1542024974258"/>
<node TEXT="System architecture and configuration" STYLE_REF="home" ID="ID_1675350419" CREATED="1542023802660" MODIFIED="1542024974257"/>
<node TEXT="Module APIs" STYLE_REF="home" ID="ID_199213996" CREATED="1542023885810" MODIFIED="1542024974257"/>
<node TEXT="Test data" STYLE_REF="home" ID="ID_1253200225" CREATED="1542023958181" MODIFIED="1542024974257"/>
<node TEXT="Environments and their setup" STYLE_REF="home" ID="ID_873718446" CREATED="1542023964068" MODIFIED="1542024974257"/>
<node TEXT="Build and Deployment" STYLE_REF="home" ID="ID_1376711046" CREATED="1542023853077" MODIFIED="1542024974256"/>
<node TEXT="Operation Manual" STYLE_REF="home" ID="ID_1519988851" CREATED="1542023810601" MODIFIED="1542024974256"/>
<node TEXT="CI/CD environment" STYLE_REF="home" ID="ID_1934164347" CREATED="1542023922359" MODIFIED="1542024974254"/>
</node>
<node TEXT="Every product/project should have only a single point of entry,&#xa;and everything is reacheable through it via max 3 steps." STYLE_REF="home" ID="ID_1838782381" CREATED="1542094454843" MODIFIED="1542094573173"/>
</node>
</node>
</node>
<node TEXT="Users and Goals" FOLDED="true" ID="ID_526900954" CREATED="1538410050459" MODIFIED="1538410753822">
<node TEXT="PM / PO" ID="ID_1997196302" CREATED="1538410068283" MODIFIED="1542014413151">
<icon BUILTIN="male1"/>
<node TEXT="Monitor and supervise the whole development process:" STYLE_REF="goal" ID="ID_1207768367" CREATED="1538410278535" MODIFIED="1542014355755">
<node TEXT="quality of the product, and its components" ID="ID_657124518" CREATED="1542014302767" MODIFIED="1542014310390"/>
<node TEXT="the growing (rate) of codebase" ID="ID_1783514669" CREATED="1542014310677" MODIFIED="1542014383369"/>
<node TEXT="the security risks and mitigation" ID="ID_1532493183" CREATED="1542014329027" MODIFIED="1542014339968"/>
</node>
</node>
<node TEXT="Developer" ID="ID_1943919614" CREATED="1538410072184" MODIFIED="1542014059515">
<icon BUILTIN="male1"/>
<node TEXT="Manage portfolio" STYLE_REF="goal" ID="ID_315920880" CREATED="1538410635306" MODIFIED="1542014521387">
<node TEXT="Get a meta-level overview on its own repositories, and their overall state" ID="ID_496837884" CREATED="1542014423832" MODIFIED="1542014828812"/>
</node>
<node TEXT="Get an overview on individual repository level from the perspectives of:" STYLE_REF="goal" ID="ID_33986391" CREATED="1542014556503" MODIFIED="1542014788223">
<node TEXT="organization of the system, and repos" ID="ID_142084743" CREATED="1542014591782" MODIFIED="1542014603752"/>
<node TEXT="dependencies" ID="ID_1499241449" CREATED="1542014605832" MODIFIED="1542014646705">
<node TEXT="external" ID="ID_270349008" CREATED="1542014647449" MODIFIED="1542014647449"/>
<node TEXT="internal" ID="ID_1757837224" CREATED="1542014583466" MODIFIED="1542014653637"/>
</node>
<node TEXT="potential vulnerabilities" ID="ID_1703110065" CREATED="1542014611574" MODIFIED="1542014663659"/>
<node TEXT="code quality" ID="ID_1260880894" CREATED="1542014665897" MODIFIED="1542014676062"/>
<node TEXT="test coverage" ID="ID_548178103" CREATED="1542014679224" MODIFIED="1542014683093"/>
</node>
<node TEXT="Get info about the potential and/or real problems" STYLE_REF="goal" ID="ID_1525034950" CREATED="1542014572373" MODIFIED="1542014788220"/>
<node TEXT="Get an overview on the used technologies" STYLE_REF="goal" ID="ID_831747299" CREATED="1542023292927" MODIFIED="1542023339947">
<node TEXT="list of libs and tools per categories" ID="ID_1224859099" CREATED="1542023325557" MODIFIED="1542023334190"/>
<node TEXT="statistics" ID="ID_1516004937" CREATED="1542023334475" MODIFIED="1542023336601"/>
</node>
<node TEXT="Finds documentation to" STYLE_REF="goal" ID="ID_749039929" CREATED="1542023724082" MODIFIED="1542023877183">
<node TEXT="Overall project/product description" ID="ID_224093526" CREATED="1542023903752" MODIFIED="1542023916497"/>
<node TEXT="System architecture and configuration" ID="ID_35114080" CREATED="1542023802660" MODIFIED="1542023978314"/>
<node TEXT="Module APIs" ID="ID_1487971107" CREATED="1542023885810" MODIFIED="1542023896391"/>
<node TEXT="Test data" ID="ID_1236312829" CREATED="1542023958181" MODIFIED="1542023962594"/>
<node TEXT="Environments and their setup" ID="ID_411910612" CREATED="1542023964068" MODIFIED="1542023971679"/>
<node TEXT="Build and Deployment" ID="ID_535588165" CREATED="1542023853077" MODIFIED="1542023953848"/>
<node TEXT="Operation Manual" ID="ID_882180623" CREATED="1542023810601" MODIFIED="1542023814807"/>
<node TEXT="CI/CD environment" ID="ID_1836510023" CREATED="1542023922359" MODIFIED="1542023931278"/>
</node>
</node>
<node TEXT="Operation Engineer" ID="ID_1340383476" CREATED="1542023700614" MODIFIED="1542024023560">
<icon BUILTIN="male1"/>
<node TEXT="Finds documentation to" STYLE_REF="goal" ID="ID_1654248287" CREATED="1542023724082" MODIFIED="1542023877183">
<node TEXT="System architecture and configuration" ID="ID_28309566" CREATED="1542023802660" MODIFIED="1542023978314"/>
<node TEXT="Build and Deployment" ID="ID_615634741" CREATED="1542023853077" MODIFIED="1542023946560"/>
<node TEXT="Operation Manual" ID="ID_1511840437" CREATED="1542023810601" MODIFIED="1542023814807"/>
</node>
</node>
<node TEXT="Gitdig Supervisor Agent" ID="ID_208442494" CREATED="1538410072184" MODIFIED="1542014861415">
<icon BUILTIN="male1"/>
<node TEXT="Deliver on-line information to PM/PO and Developer on the repositories" STYLE_REF="goal" ID="ID_1748374278" CREATED="1538410635306" MODIFIED="1542014927885"/>
</node>
</node>
<node TEXT="Activities" ID="ID_34375269" CREATED="1520494043951" MODIFIED="1538410858207">
<node TEXT="Maintain" STYLE_REF="activity" ID="ID_752359250" CREATED="1542183665104" MODIFIED="1542183669882">
<node TEXT="Create new product (meta compnent repository)" STYLE_REF="goal" ID="ID_1688733485" CREATED="1542093837936" MODIFIED="1542094887999">
<node TEXT="Create initial config file with default values" STYLE_REF="activityDetailHiPrio" ID="ID_709503162" CREATED="1542115055531" MODIFIED="1542115062434">
<node TEXT="gitdig init" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_668309220" CREATED="1542115033093" MODIFIED="1542115038308"/>
</node>
</node>
<node TEXT="Create a new system component (repository)" STYLE_REF="goal" ID="ID_792679936" CREATED="1542093869896" MODIFIED="1542093914229"/>
<node TEXT="Maintain Product meta info" STYLE_REF="goal" ID="ID_33624233" CREATED="1542095464184" MODIFIED="1542095479367"/>
<node TEXT="Maintain a System Component" STYLE_REF="goal" ID="ID_1541927788" CREATED="1542094035777" MODIFIED="1542095859502"/>
<node TEXT="Retire a project" STYLE_REF="goal" ID="ID_1734300139" CREATED="1542028140435" MODIFIED="1542095783605"/>
</node>
<node TEXT="Collect" STYLE_REF="activity" FOLDED="true" ID="ID_384138147" CREATED="1520140234951" MODIFIED="1542114806875">
<node TEXT="" ID="ID_1903201161" CREATED="1538419039758" MODIFIED="1538419075371">
<icon BUILTIN="males"/>
<node TEXT="TBD" ID="ID_1479044383" CREATED="1538410052279" MODIFIED="1542013878954">
<icon BUILTIN="male1"/>
</node>
<node TEXT="TBD" ID="ID_1466863973" CREATED="1538410052279" MODIFIED="1542013881002">
<icon BUILTIN="male1"/>
</node>
</node>
<node TEXT="Collect Product and System Component Info" STYLE_REF="goal" ID="ID_1668695073" CREATED="1542094157938" MODIFIED="1542096068417">
<node TEXT="own" ID="ID_226882657" CREATED="1542096054942" MODIFIED="1542096056890"/>
<node TEXT="3rd party" ID="ID_1843075429" CREATED="1542096057166" MODIFIED="1542096060772"/>
<node TEXT="Collect data about repositories, through a selected user account, and make a local snapshot file." STYLE_REF="activityDetailHiPrio" ID="ID_1832132567" CREATED="1542115103532" MODIFIED="1542115121178">
<node TEXT="gitdig collect" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1296720611" CREATED="1542115110873" MODIFIED="1542115117301"/>
</node>
</node>
<node TEXT="Retrieve Vulnerability Info" STYLE_REF="goal" ID="ID_1582939090" CREATED="1542096027130" MODIFIED="1542096068418"/>
<node TEXT="Analyze the Portfolio" STYLE_REF="goal" ID="ID_1714656637" CREATED="1542094133394" MODIFIED="1542096068414"/>
<node TEXT="" ID="ID_1695767300" CREATED="1542096096638" MODIFIED="1542096096638"/>
</node>
<node TEXT="Check" STYLE_REF="activity" FOLDED="true" ID="ID_1025061237" CREATED="1520140234951" MODIFIED="1542114778615">
<node TEXT="" ID="ID_960046412" CREATED="1538419039758" MODIFIED="1538419075371">
<icon BUILTIN="males"/>
<node TEXT="TBD" ID="ID_714087919" CREATED="1538410052279" MODIFIED="1542013878954">
<icon BUILTIN="male1"/>
</node>
<node TEXT="TBD" ID="ID_1974805531" CREATED="1538410052279" MODIFIED="1542013881002">
<icon BUILTIN="male1"/>
</node>
</node>
<node TEXT="Check the Portfolio" STYLE_REF="activityDetailLoPrio" ID="ID_759852415" CREATED="1520140026807" MODIFIED="1542130494870">
<node TEXT="TBD" STYLE_REF="activityDetailLoPrio" ID="ID_1136033585" CREATED="1521266465077" MODIFIED="1542130132234"/>
<node TEXT="orphan nodes" STYLE_REF="activityDetailLoPrio" ID="ID_1596069050" CREATED="1542095800160" MODIFIED="1542130118311"/>
<node TEXT="KPIs" STYLE_REF="activityDetailLoPrio" ID="ID_494349857" CREATED="1542130532150" MODIFIED="1542130542486"/>
<node TEXT="Check badges" STYLE_REF="activityDetailLoPrio" ID="ID_1108115687" CREATED="1542130547524" MODIFIED="1542130557752"/>
</node>
<node TEXT="Check the product" STYLE_REF="activityDetailLoPrio" ID="ID_1840921885" CREATED="1542130083908" MODIFIED="1542130116518">
<node TEXT="Check organizational completeness and consistency" STYLE_REF="activityDetailLoPrio" ID="ID_901600324" CREATED="1542094371061" MODIFIED="1542130483944"/>
<node TEXT="orphan nodes" STYLE_REF="activityDetailLoPrio" ID="ID_1923701169" CREATED="1542095800160" MODIFIED="1542130118311"/>
<node TEXT="KPIs" STYLE_REF="activityDetailLoPrio" ID="ID_1027987582" CREATED="1542130532150" MODIFIED="1542130542486"/>
<node TEXT="Check badges" STYLE_REF="activityDetailLoPrio" ID="ID_1353538635" CREATED="1542130547524" MODIFIED="1542130557752"/>
</node>
<node TEXT="Check a component" STYLE_REF="goal" ID="ID_719747811" CREATED="1542115741002" MODIFIED="1542115755846">
<node TEXT="Check the repository" STYLE_REF="activityDetailHiPrio" ID="ID_1388122763" CREATED="1542115980047" MODIFIED="1542115985731">
<node TEXT="Execute the `gitdig check` CLI command" STYLE_REF="activityDetailHiPrio" FOLDED="true" ID="ID_770066548" CREATED="1542129936736" MODIFIED="1542129972977">
<node TEXT="gitdig check" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_884274380" CREATED="1542115772355" MODIFIED="1542115777118"/>
<node TEXT="Check if repository contains README file" STYLE_REF="activityDetailHiPrio" ID="ID_1809938390" CREATED="1542129587699" MODIFIED="1542129904148"/>
<node TEXT="Check if repository contains package.json file" STYLE_REF="activityDetailHiPrio" ID="ID_1714957704" CREATED="1542129587699" MODIFIED="1542129904145"/>
<node TEXT="Check if repository description and package.description match" STYLE_REF="activityDetailHiPrio" ID="ID_278624108" CREATED="1542129587699" MODIFIED="1542129904141"/>
<node TEXT="Check if repository name and package name match" STYLE_REF="activityDetailHiPrio" ID="ID_1904517960" CREATED="1542129587699" MODIFIED="1542129904136"/>
<node TEXT="Check if package.json has every mandatory fields (&quot;name&quot;, &quot;version&quot;, &quot;description&quot;, &quot;author&quot;, &quot;contributors&quot;, &quot;keywords&quot;, &quot;repository&quot;)" STYLE_REF="activityDetailHiPrio" ID="ID_89049974" CREATED="1542129587699" MODIFIED="1542129904130"/>
<node TEXT="Check if the following package.json properties have value: &quot;name&quot;, &quot;version&quot;, &quot;description&quot;, &quot;author&quot;" STYLE_REF="activityDetailHiPrio" ID="ID_960164732" CREATED="1542129587699" MODIFIED="1542129904122"/>
<node TEXT="Check if pre-push field exists, and the minimum commands are configured" STYLE_REF="activityDetailHiPrio" ID="ID_1179890310" CREATED="1542129841939" MODIFIED="1542129904116"/>
<node TEXT="Check if pre-push module is configured as a dependency" STYLE_REF="activityDetailHiPrio" ID="ID_145725916" CREATED="1542129854369" MODIFIED="1542129904111"/>
<node TEXT="Check if scripts field exists, and the minimum commands are configured, that are: &quot;test&quot;, &quot;lint&quot;, &quot;coverage&quot;" STYLE_REF="activityDetailHiPrio" ID="ID_550959210" CREATED="1542129865493" MODIFIED="1542129904102">
<node TEXT="Check if automated testing is configured" STYLE_REF="activityDetailHiPrio" ID="ID_1291763610" CREATED="1542094354409" MODIFIED="1542116231095"/>
<node TEXT="Check if code quality assurance is configured" STYLE_REF="activityDetailHiPrio" ID="ID_1889396433" CREATED="1542094354409" MODIFIED="1542116209799"/>
<node TEXT="Check if test coverage is configured" STYLE_REF="activityDetailHiPrio" ID="ID_1610021669" CREATED="1542094354409" MODIFIED="1542116255433"/>
</node>
<node TEXT="Check badges" STYLE_REF="activityDetailLoPrio" ID="ID_831385227" CREATED="1542130547524" MODIFIED="1542130557752"/>
<node TEXT="check links" STYLE_REF="activityDetailLoPrio" ID="ID_785430734" CREATED="1542114460188" MODIFIED="1542173705779">
<node TEXT="Find links from" STYLE_REF="activityDetailLoPrio" ID="ID_541953368" CREATED="1542114498713" MODIFIED="1542173743103">
<node TEXT="in READMEs" ID="ID_1504358538" CREATED="1542114501077" MODIFIED="1542114507145"/>
<node TEXT="in config files" ID="ID_1090403805" CREATED="1542114508651" MODIFIED="1542114520019"/>
</node>
<node TEXT="Check links found, if it" STYLE_REF="activityDetailLoPrio" ID="ID_1953076479" CREATED="1542114496238" MODIFIED="1542173763033">
<node TEXT="has valid format" ID="ID_545656170" CREATED="1542114478968" MODIFIED="1542173766101"/>
<node TEXT="a broken link" LOCALIZED_STYLE_REF="default" ID="ID_48353456" CREATED="1542114484377" MODIFIED="1542173773101"/>
</node>
</node>
</node>
<node TEXT="See problem details" STYLE_REF="activityDetailHiPrio" ID="ID_1669231248" CREATED="1542094301326" MODIFIED="1542115764051"/>
</node>
<node TEXT="Check if there are new versions of modules used, an shows which component is affected by it" STYLE_REF="activityDetailHiPrio" ID="ID_1584004246" CREATED="1542115818765" MODIFIED="1542130435858">
<node TEXT="gitdig dependencies" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_146881695" CREATED="1542115828829" MODIFIED="1542115867167"/>
</node>
<node TEXT="Lists the repositories that depends on a component, having it as dependency" STYLE_REF="activityDetailHiPrio" ID="ID_57866412" CREATED="1542116005193" MODIFIED="1542130701916">
<node TEXT="gitdig dependants &lt;componentname&gt;" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1393883954" CREATED="1542116016691" MODIFIED="1542130717738"/>
</node>
<node TEXT="Check the vulnerabilities of modules used" STYLE_REF="activityDetailHiPrio" ID="ID_1791618866" CREATED="1542094363617" MODIFIED="1542115935072">
<node TEXT="gitdig vulnerabilities" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_1110247504" CREATED="1542115828829" MODIFIED="1542115836427"/>
</node>
</node>
</node>
<node TEXT="Review" STYLE_REF="activity" FOLDED="true" ID="ID_1419007731" CREATED="1520140057446" MODIFIED="1542183623203">
<node TEXT="" ID="ID_684987782" CREATED="1538419039758" MODIFIED="1538419075371">
<icon BUILTIN="males"/>
<node TEXT="Developer" ID="ID_1262568884" CREATED="1538410052279" MODIFIED="1542015013479">
<icon BUILTIN="male1"/>
</node>
<node TEXT="PM / PO" ID="ID_1025670071" CREATED="1538410068283" MODIFIED="1542014413151">
<icon BUILTIN="male1"/>
</node>
</node>
<node TEXT="Review a System component (a repository)" STYLE_REF="goal" ID="ID_1799682569" CREATED="1542028103951" MODIFIED="1542095761682"/>
<node TEXT="Review technologies, tools and trends" STYLE_REF="goal" ID="ID_1751765691" CREATED="1542028161309" MODIFIED="1542095774399"/>
</node>
<node TEXT="Find" STYLE_REF="activity" FOLDED="true" ID="ID_233881522" CREATED="1520140234951" MODIFIED="1542114877795">
<node TEXT="" ID="ID_209949047" CREATED="1538419039758" MODIFIED="1538419075371">
<icon BUILTIN="males"/>
<node TEXT="TBD" ID="ID_1034329215" CREATED="1538410052279" MODIFIED="1542013878954">
<icon BUILTIN="male1"/>
</node>
<node TEXT="TBD" ID="ID_407698265" CREATED="1538410052279" MODIFIED="1542013881002">
<icon BUILTIN="male1"/>
</node>
</node>
<node TEXT="Find info about a product or component" STYLE_REF="goal" ID="ID_150671557" CREATED="1542094175436" MODIFIED="1542095874393">
<node TEXT="List the repositories" ID="ID_288229299" CREATED="1542115139492" MODIFIED="1542115145825">
<node TEXT="gitdig ls" LOCALIZED_STYLE_REF="AutomaticLayout.level,1" ID="ID_611847691" CREATED="1542115146836" MODIFIED="1542115150234"/>
</node>
</node>
<node TEXT="Find dependencies of a system component" STYLE_REF="goal" ID="ID_1465356965" CREATED="1542115638776" MODIFIED="1542115670523"/>
<node TEXT="Find what depends on a system component" STYLE_REF="goal" ID="ID_1797939939" CREATED="1542115654243" MODIFIED="1542115670881"/>
</node>
<node TEXT="Monitor" STYLE_REF="activity" ID="ID_55491316" CREATED="1542130805814" MODIFIED="1542183611760">
<node TEXT="Do scheduled &quot;Collect&quot; and &quot;Check&quot; tasks" STYLE_REF="activityDetailLoPrio" ID="ID_452293394" CREATED="1542130814725" MODIFIED="1542130917368"/>
<node TEXT="Get overview on current state" STYLE_REF="activityDetailLoPrio" ID="ID_420569154" CREATED="1542130897464" MODIFIED="1542130916805"/>
<node TEXT="Get Alerts on potential problems" STYLE_REF="activityDetailLoPrio" ID="ID_896373733" CREATED="1542094084747" MODIFIED="1542130916393"/>
</node>
</node>
<node TEXT="glossary" ID="ID_940602624" CREATED="1542094891203" MODIFIED="1542094893737">
<node TEXT="Portfolio" ID="ID_1890155661" CREATED="1542094948927" MODIFIED="1542095207388">
<font BOLD="true"/>
<node TEXT="The set of all of the repostiories belong to a repository user or organization" ID="ID_506356329" CREATED="1542094954994" MODIFIED="1542095003327"/>
<node TEXT="It also hold some information about the owner itself" ID="ID_471829395" CREATED="1542095004165" MODIFIED="1542095021250"/>
</node>
<node TEXT="Product" ID="ID_1886347714" CREATED="1542094894429" MODIFIED="1542095207388">
<font BOLD="true"/>
<node TEXT="The group of system components, that are the outcome of a project" ID="ID_720070364" CREATED="1542094898336" MODIFIED="1542094923493"/>
<node TEXT="There may be product that fits into one single repository, or distributed among a big number of repositories, including a complex dependency structure." ID="ID_1260226477" CREATED="1542095066116" MODIFIED="1542095153005"/>
</node>
<node TEXT="Project" ID="ID_1923994977" CREATED="1542094925966" MODIFIED="1542095207388">
<font BOLD="true"/>
<node TEXT="Software development and maintenance project" ID="ID_1457275477" CREATED="1542094930025" MODIFIED="1542094946916"/>
</node>
<node TEXT="Repository" ID="ID_1648431004" CREATED="1542095154800" MODIFIED="1542095207387">
<font BOLD="true"/>
<node TEXT="A repository, of a version control system, such as git or bitbucket." ID="ID_1489436536" CREATED="1542095157927" MODIFIED="1542095191763"/>
<node TEXT="The respositories should be on-line, and may provide some API to access its content." ID="ID_110161476" CREATED="1542095227954" MODIFIED="1542095274265"/>
</node>
<node TEXT="Root Node" ID="ID_87304093" CREATED="1542131037319" MODIFIED="1542131048137"/>
<node TEXT="Orphan Node" ID="ID_727389085" CREATED="1542131041330" MODIFIED="1542131045464"/>
<node TEXT="System Component" ID="ID_447416294" CREATED="1542095025569" MODIFIED="1542095207385">
<font BOLD="true"/>
<node TEXT="A repository, that holds any information that belongs to a product." ID="ID_416877895" CREATED="1542095032028" MODIFIED="1542095062777"/>
</node>
<node TEXT="Meta Info" ID="ID_1554711887" CREATED="1542095483352" MODIFIED="1542095492506">
<font BOLD="true"/>
<node TEXT="Additional information to Portfolio, Product or System Component, that is not possible to gain from standard configuration files or from other type of resources can be found in the repositories," ID="ID_1878937465" CREATED="1542095493397" MODIFIED="1542095578835"/>
<node TEXT="Meta Info can be placed either into standard config/resource files, e.g. package.json, pom.xml, or into a .gitdig.yml file, dedicated to use by the gitdig tool." ID="ID_1943193916" CREATED="1542095582202" MODIFIED="1542095678221"/>
</node>
</node>
<node TEXT="maybe:" ID="ID_1611433728" CREATED="1542114453360" MODIFIED="1542114456904"/>
<node TEXT="Q&amp;A" FOLDED="true" ID="ID_1053308740" CREATED="1524725064196" MODIFIED="1524725066375">
<node TEXT="Collect here the questions to discuss with the Product Owner, as well as the answers you got." LOCALIZED_STYLE_REF="default" ID="ID_975047596" CREATED="1542013446361" MODIFIED="1542013480129"/>
</node>
</node>
</node>
</map>
