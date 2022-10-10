import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { usenavbar_containerCb, usenavbar_titleCb, useTextBox1Cb, usenavbar_linksCb, useLink1Cb, useLink2Cb, useLink3Cb, useDropdown1Cb, useImage3Cb, useFlex5Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useImage5Cb, useFlex6Cb, useFlex7Cb, useTextBox8Cb, useFlex8Cb, useImage6Cb, useFlex9Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useFlex10Cb, useLink5Cb, useImage7Cb, useFlex11Cb, useTextBox14Cb, useImage9Cb, useFlex12Cb, useFlex13Cb, useFlex14Cb, useTextBox15Cb, useTextBox16Cb, useFlex15Cb, useTextBox17Cb, useImage10Cb, useImage11Cb, useImage12Cb, useFlex16Cb, useFlex17Cb, useTextBox18Cb, useFlex18Cb, useTextBox19Cb, useImage13Cb, useFlex19Cb, useFlex20Cb, useFlex21Cb, useImage15Cb, useTextBox20Cb, useTextBox21Cb, useImage16Cb, useFlex22Cb, useTextBox22Cb, useFlex24Cb, useTextBox23Cb, useImage17Cb, useFlex25Cb, useFlex29Cb, useImage18Cb, useFlex30Cb, useTextBox27Cb, useTextBox28Cb, useImage20Cb, useFlex31Cb, useFlex32Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useImage22Cb, useImage24Cb, useFlex33Cb, useFlex34Cb, useTextBox32Cb, useTextBox33Cb, useInput1Cb, useFlex36Cb, useTextBox34Cb, useImage25Cb, useFlex47Cb, useFlex48Cb, useTextBox39Cb, useFlex49Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useTextBox43Cb, useTextBox44Cb, useFlex50Cb, useTextBox45Cb, useTextBox47Cb, useTextBox48Cb, useFlex51Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useFlex52Cb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useFlex53Cb, useTextBox65Cb, useImage26Cb, useImage27Cb, useImage28Cb, useImage29Cb, useImage30Cb, useFlex54Cb, useImage33Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const navbar_containerProps = useStore((state)=>state["Home"]["navbar_container"]);
const navbar_containerIoProps = useIoStore((state)=>state["Home"]["navbar_container"]);
const navbar_containerCb = usenavbar_containerCb()
const navbar_titleProps = useStore((state)=>state["Home"]["navbar_title"]);
const navbar_titleIoProps = useIoStore((state)=>state["Home"]["navbar_title"]);
const navbar_titleCb = usenavbar_titleCb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const navbar_linksProps = useStore((state)=>state["Home"]["navbar_links"]);
const navbar_linksIoProps = useIoStore((state)=>state["Home"]["navbar_links"]);
const navbar_linksCb = usenavbar_linksCb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Dropdown1Props = useStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()

  return (<>
  <Flex {...navbar_containerProps} {...navbar_containerCb} {...navbar_containerIoProps}>
<Flex {...navbar_titleProps} {...navbar_titleCb} {...navbar_titleIoProps}>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Flex {...navbar_linksProps} {...navbar_linksCb} {...navbar_linksIoProps}>
<Link {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<Link {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
<Link {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<Dropdown {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
<Image {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Flex>
<Flex {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Flex {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Link {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
<Image {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
</Flex>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
</Flex>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Image {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
<Image {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Flex {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<Flex {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
<Flex {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
</Flex>
<Image {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Flex {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Image {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
</Flex>
<Flex {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
</Flex>
<Image {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Flex {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
</Flex>
<Flex {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<Image {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
</Flex>
<Flex {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
<Image {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
<Image {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Flex {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Input {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Flex {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Image {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
</Flex>
<Flex {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<Flex {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
<Flex {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
<Flex {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
</Flex>
<Image {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Flex {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Flex {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Image {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Image {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Image {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Image {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
  </>);
}
