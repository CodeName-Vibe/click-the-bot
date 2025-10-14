const { Router } = require('express')
const router = Router()
const dbManager = require('./managers/dbManager')

router.post('/ApiManager/get-tonic-info',async(req, res)=>{
  const tonicInfo = await dbManager.getTonicInfo(req.body.tonicIDd)
  if(tonicInfo.link&&tonicInfo.offer&&tonicInfo.country){
    res.status(200).send({
      ok:true,
      tonicLink:"https://"+tonicInfo.link,
      offerName:req.body.tonicIDd+" - "+tonicInfo.name,
      geo:tonicInfo.country
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-tonic-info  //API
// req: 
// { 
//    tonicIDd:str
// } 
// res: 
// {
//    tokinLink:str,
//    offerName:str,
//    geo:str
// }

router.post('/ApiManager/get-tonic-rsoc1-info',async(req, res)=>{
  const tonicInfo = await dbManager.getTonicRSOC1Info(req.body.tonicIDd)
  if(tonicInfo.link&&tonicInfo.offer&&tonicInfo.country){
    res.status(200).send({
      ok:true,
      tonicLink:tonicInfo.direct_link,
      offerName:req.body.tonicIDd+" - "+tonicInfo.name,
      geo:tonicInfo.country
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-tonic-rsoc1-info  //API
// req: 
// { 
//    tonicIDd:str
// } 
// res: 
// {
//    tokinLink:str,
//    offerName:str,
//    geo:str
// }

router.post('/ApiManager/get-tonic-rsoc2-info',async(req, res)=>{
  const tonicInfo = await dbManager.getTonicRSOC2Info(req.body.tonicIDd)
  if(tonicInfo.link&&tonicInfo.offer&&tonicInfo.country){
    res.status(200).send({
      ok:true,
      tonicLink:tonicInfo.direct_link,
      offerName:req.body.tonicIDd+" - "+tonicInfo.name,
      geo:tonicInfo.country
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-tonic-rsoc2-info  //API
// req: 
// { 
//    tonicIDd:str
// } 
// res: 
// {
//    tokinLink:str,
//    offerName:str,
//    geo:str
// }

router.post('/ApiManager/get-tonic-rsoc3-info',async(req, res)=>{
  const tonicInfo = await dbManager.getTonicRSOC3Info(req.body.tonicIDd)
  if(tonicInfo.link&&tonicInfo.offer&&tonicInfo.country){
    res.status(200).send({
      ok:true,
      tonicLink:tonicInfo.direct_link,
      offerName:req.body.tonicIDd+" - "+tonicInfo.name,
      geo:tonicInfo.country
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-tonic-rsoc3-info  //API
// req: 
// { 
//    tonicIDd:str
// } 
// res: 
// {
//    tokinLink:str,
//    offerName:str,
//    geo:str
// }

router.post('/ApiManager/get-tonic-rsoc4-info',async(req, res)=>{
  const tonicInfo = await dbManager.getTonicRSOC4Info(req.body.tonicIDd)
  if(tonicInfo.link&&tonicInfo.offer&&tonicInfo.country){
    res.status(200).send({
      ok:true,
      tonicLink:tonicInfo.direct_link,
      offerName:req.body.tonicIDd+" - "+tonicInfo.name,
      geo:tonicInfo.country
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-tonic-rsoc4-info  //API
// req: 
// { 
//    tonicIDd:str
// } 
// res: 
// {
//    tokinLink:str,
//    offerName:str,
//    geo:str
// }

router.post('/ApiManager/create-link',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOffer(req.body)
  if(peerOffer){
    console.log('CPC AFD Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link  //API
// req: 
// { 
//    offerName:str,
//    geo:str,
//    link:str
//    trafficSource:str,
// } 
// res: 
// { 
//    peerclickLink:str
// }

router.post('/ApiManager/create-link-rsoc',async(req, res)=>{
  const clickOffer = await dbManager.createClickflareOfferRsocCPC(req.body)
  if(clickOffer){
    switch (req.body.trafficSource) {
      case 'MGID':
        console.log('CPC TRM Tracking link created');
        break;
      case 'TABOOLA':
        console.log('CPC TRT Tracking link created');
        break;
      case 'OUT':
        console.log('CPC TRO Tracking link created');
        break;
      case 'NEWSBREAK':
        console.log('CPC TNB Tracking link created');
        break;
      case 'FACEBOOK':
        console.log('CPC FB Tracking link created');
        break;
      case 'TIKTOK':
        console.log('CPC TTT Tracking link created');
        break;
    }
    res.status(200).send({
      ok:true,
      clickflareLink: clickOffer
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-rsoc  //API
// req: 
// { 
//    offerName:str,
//    geo:str,
//    trafficSource:str,
//    offersCPC:array<{tonicID:num, offerName:str, trackingLink:str, geo:str}>,
// } 
// res: 
// { 
//    clickflareLink:str
// }

router.post('/ApiManager/create-link-rsoc-dsp',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOfferRsocDSP(req.body)
  if(peerOffer){
    console.log('DSP RSOC Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-rsoc  //API
// req: 
// { 
//    offerName:str,
//    geo:str,
//    trafficSource:str,
//    offersDSP:array<{tonicID:num, offerName:str, trackingLink:str, geo:str, offerText:str}>,
// } 
// res: 
// { 
//    peerclickLink:str
// }

router.post('/ApiManager/create-link-dsp',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOfferDSP(req.body)
  if(peerOffer){
    console.log('DSP AFD Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-dsp
// req: 
// { 
//   offerName:str,
//   geo:str,
//   link:str,
//   trafficSource:str,
//   campaignText:str
// } 
// res: 
// { 
//   peerclickLink:str
// }

router.post('/ApiManager/create-link-domain',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOfferDomain(req.body)
  if(peerOffer){
    console.log('Domain Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-domain
// req: 
// { 
//   offerName:str,
//   geo:str,
//   link:str,
//   trafficSource:str
// } 
// res: 
// { 
//   peerclickLink:str
// }

router.post('/ApiManager/create-link-inuvo',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOfferInuvo(req.body)
  if(peerOffer){
    console.log('Inuvo Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-inuvo
// req: 
// { 
//   offerName:str,
//   geo:str,
//   trafficSource:str,
//   campId:num,
//   offerLinks:array<str>
// } 
// res: 
// { 
//   peerclickLink:str
// }

router.post('/ApiManager/create-link-marmar',async(req, res)=>{
  const peerOffer = await dbManager.createPeerclickOfferMarmar(req.body)
  if(peerOffer){
    console.log('MarMar Tracking link created');
    res.status(200).send({
      ok:true,
      peerclickLink: "https"+peerOffer.split('http')[1]
    })
  }else{
    res.status(200).send({
      ok:false,
    })
  }
})
// /create-link-marmar
// req: 
// { 
//   offerName:str,
//   geo:str,
//   trafficSource:str,
//   headline:str,
//   asid:str,
//   terms:str
// } 
// res: 
// { 
//   peerclickLink:str
// }

router.post('/ApiManager/get-peerclick-offer',async(req, res)=>{
  const offerBody = await dbManager.getPeerclickOffer(req.body.offerId)
  if(offerBody){
    res.status(200).send({
      ok:true,
      offer: offerBody
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /get-peerclick-offer
// req: 
// { 
//    offerId:number
// } 
// res: 
// {
//    ok: boolean,
//    offer: {}
// }

router.post('/ApiManager/edit-marmar-offer-terms',async(req, res)=>{
  const responce = await dbManager.setPeerclickMarmarOfferTerms(req.body.offerId, req.body.offerBody)
  if(responce){
    console.log('MarMar offer terms edited');
    res.status(200).send({
      ok:true
    })
  }else{
    res.status(200).send({
      ok:false
    })
  }
})
// /edit-marmar-offer-terms
// req: 
// { 
//    offerId:number
//    offerBody:{
//      name:str,
//      url:str,
//      country:{code:str},
//      affiliateNetwork:{id:number},
//      payout:{type:str,value:null,currency:str}
//    }
// } 
// res: 
// {
//    ok: boolean
// }

module.exports = router