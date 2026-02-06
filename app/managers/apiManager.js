const staticData = require('../staticData.json')
const userManager = require('./userManager')
const axios = require('axios')

const PORT = process.env.PORT || 3020;

class ApiManager {
  constructor() {
    console.log('Api Manager connected!')

    this.getTonicInfo = async function(id, tonicId) {
      let tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      if(tonicInfo.data.ok) {
        userManager.setAPI(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        return true
      }
      return false
      // userManager.setAPI(id, tonicId, "Dental Implants", "geo", "http://some-link-123");
      // return true;
    }

    this.getTonicRSOC1Info = async function(id, tonicId) {
      let tonicInfo;
      if (userManager.getBranch(id) == "DSP" && userManager.getOfferDSP(id, tonicId)) {
        return true
      } else {
        tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-rsoc1-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      }
      if(tonicInfo.data.ok) {
        if (userManager.getBranch(id) == "CPC") {
          userManager.setOffersCPC(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        } else if (userManager.getBranch(id) == "DSP") {
          userManager.setOffersDataDSP(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        }
        return true
      }
      return false
    }

    this.getTonicRSOC2Info = async function(id, tonicId) {
      let tonicInfo;
      if (userManager.getBranch(id) == "DSP" && userManager.getOfferDSP(id, tonicId)) {
        return true
      } else {
        tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-rsoc2-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      }
      if(tonicInfo.data.ok) {
        if (userManager.getBranch(id) == "CPC") {
          userManager.setOffersCPC(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        } else if (userManager.getBranch(id) == "DSP") {
          userManager.setOffersDataDSP(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        }
        return true
      }
      return false
    }

    this.getTonicRSOC3Info = async function(id, tonicId) {
      let tonicInfo;
      if (userManager.getBranch(id) == "DSP" && userManager.getOfferDSP(id, tonicId)) {
        return true
      } else {
        tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-rsoc3-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      }
      if(tonicInfo.data.ok) {
        if (userManager.getBranch(id) == "CPC") {
          userManager.setOffersCPC(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        } else if (userManager.getBranch(id) == "DSP") {
          userManager.setOffersDataDSP(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        }
        return true
      }
      return false
    }

    this.getTonicRSOC4Info = async function(id, tonicId) {
      let tonicInfo;
      if (userManager.getBranch(id) == "DSP" && userManager.getOfferDSP(id, tonicId)) {
        return true
      } else {
        tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-rsoc4-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      }
      if(tonicInfo.data.ok) {
        if (userManager.getBranch(id) == "CPC") {
          userManager.setOffersCPC(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        } else if (userManager.getBranch(id) == "DSP") {
          userManager.setOffersDataDSP(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        }
        return true
      }
      return false
    }

    this.getTonicRSOC5Info = async function(id, tonicId) {
      let tonicInfo;
      if (userManager.getBranch(id) == "DSP" && userManager.getOfferDSP(id, tonicId)) {
        return true
      } else {
        tonicInfo = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-tonic-rsoc5-info',{tonicIDd:tonicId}).catch(err=>{console.log(err)})
      }
      if(tonicInfo.data.ok) {
        if (userManager.getBranch(id) == "CPC") {
          userManager.setOffersCPC(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        } else if (userManager.getBranch(id) == "DSP") {
          userManager.setOffersDataDSP(id, tonicId, tonicInfo.data.offerName, tonicInfo.data.geo, tonicInfo.data.tonicLink);
        }
        return true
      }
      return false
    }

    this.getClickflareLink = async function(network, tonicId, offerName, geo, branch, tonicLink, trafficSource, campaignText, team, campId, offerLinks, offersCPC, offersDSP, headline, asid, terms, agency, keywords) {
      if (network == "Tonic0") {
        if (branch == "CPC") {
          let ts = ''
          if (trafficSource == "Outbrain") {
            ts = 'OUT'
          } else if (trafficSource == "Mgid") {
            ts = 'MGID'
          } else if (trafficSource == "RevContent") {
            ts = 'REV'
          } else if (trafficSource == "Taboola") {
            ts = 'TABOOLA'
          }
          let data = { 
            offerName: offerName,
            geo: geo,
            offerLink: tonicLink,
            trafficSource: ts,
            tonicId:tonicId
          }
          let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link',data).catch(err=>{
            console.log(err)
            return false
          })
          if (!createLink.data.ok) {
            return false
          } else {
            return createLink.data
          }
        } else if (branch == "DSP") {
          let ts = "";
          if (team == "StapMgidDSP") {
            ts = "s" + trafficSource
          } else if (team == "VladMgidDSP") {
            ts = "v" + trafficSource
          } else if (team == "MgidDSP") {
            ts = "j" + trafficSource
          } else if (team == "DarkDSP") {
            ts = "d" + trafficSource
          } else if (team == "LehaDSP") {
            ts = "l" + trafficSource
          } else if (team == "YaanDSP") {
            ts = "y" + trafficSource
          }
          let data = { 
            offerName: offerName,
            geo: geo,
            tonicLink: tonicLink,
            trafficSource: ts,
            campaignText: campaignText,
            tonicId:tonicId
          }
          let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-dsp',data).catch(err=>{
            console.log(err)
            return false
          })
          if (!createLink.data.ok) {
            return false
          } else {
            return createLink.data
          }
        }
      } else if (network == "Tonic1") {
        if (branch == "CPC") {
          let ts = ''
          if (trafficSource == "Mgid1") {
            ts = 'MGID1'
          } else if (trafficSource == "Mgid2") {
            ts = 'MGID2'
          } else if (trafficSource == "Taboola1") {
            ts = 'TABOOLA1'
          } else if (trafficSource == "Taboola2") {
            ts = 'TABOOLA2'
          } else if (trafficSource == "Outbrain") {
            ts = 'OUT'
          } else if (trafficSource == "NewsBreak") {
            ts = 'NEWSBREAK'
          } else if (trafficSource == "Facebook") {
            ts = 'FACEBOOK'
          }

          let data = { 
            offerName: offerName,
            geo: geo,
            trafficSource: ts,
            agency: agency,
            offersCPC: offersCPC
          }
          let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-rsoc',data).catch(err=>{
            console.log(err)
            return false
          })
          if (!createLink.data.ok) {
            return false
          } else {
            return createLink.data
          }
        } else if (branch == "DSP") {
          let ts = "";
          if (team == "StapMgidDSP") {
            ts = "s" + trafficSource
          } else if (team == "VladMgidDSP") {
            ts = "v" + trafficSource
          } else if (team == "MgidDSP") {
            ts = "j" + trafficSource
          } else if (team == "DarkDSP") {
            ts = "d" + trafficSource
          } else if (team == "LehaDSP") {
            ts = "l" + trafficSource
          } else if (team == "YaanDSP") {
            ts = "y" + trafficSource
          }
          let data = { 
            offerName: offerName,
            geo: geo,
            trafficSource: ts,
            offersDSP: offersDSP
          }
          let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-rsoc-dsp',data).catch(err=>{
            console.log(err)
            return false
          })
          if (!createLink.data.ok) {
            return false
          } else {
            return createLink.data
          }
        }
      } else if (network == "System1") {
        if (branch == "CPC") {
          let ts = ''
          if (trafficSource == "Taboola") {
            ts = 'TABOOLA'
          } else if (trafficSource == "Outbrain") {
            ts = 'OUT'
          } else if (trafficSource == "Facebook") {
            ts = 'FACEBOOK'
          }

          let data = { 
            offerName: offerName,
            geo: geo,
            keywords: keywords,
            trafficSource: ts,
            agency: agency,
            domainUrls: offerLinks
          }
          let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-system1-rsoc',data).catch(err=>{
            console.log(err)
            return false
          })
          if (!createLink.data.ok) {
            return false
          } else {
            return createLink.data
          }
        }
      }
    //   else if (network == "Domain") {
    //     let ts = ''
    //     if (trafficSource == "Outbrain") {
    //       ts = 'OUT'
    //     } else if (trafficSource == "Taboola") {
    //       ts = 'TABOOLA'
    //     }
    //     let data = { 
    //       offerName: offerName,
    //       geo: geo,
    //       offerLink: tonicLink,
    //       trafficSource: ts
    //     }
    //     let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-domain',data).catch(err=>{
    //       console.log(err)
    //       return false
    //     })
    //     if (!createLink.data.ok) {
    //       return false
    //     } else {
    //       return createLink.data
    //     }
    //   } else if (network == "Inuvo") {
    //     let ts = ''
    //     if (trafficSource == "Mgid") {
    //       ts = 'MGID'
    //     } else if (trafficSource == "Taboola") {
    //       ts = 'TABOOLA'
    //     } else if (trafficSource == "NewsBreak") {
    //       ts = 'NEWSBREAK'
    //     } else if (trafficSource == "Rev0") {
    //       ts = 'REV0'
    //     } else if (trafficSource == "Rev1") {
    //       ts = 'REV1'
    //     } else if (trafficSource == "Rev2") {
    //       ts = 'REV2'
    //     }
    //     let data = { 
    //       offerName: offerName,
    //       geo: geo,
    //       trafficSource: ts,
    //       campId: campId,
    //       offerLinks: offerLinks,
    //     }
    //     let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-inuvo',data).catch(err=>{
    //       console.log(err)
    //       return false
    //     })
    //     if (!createLink.data.ok) {
    //       return false
    //     } else {
    //       return createLink.data
    //     }
    //   } else if (network == "MarMar") {
    //     let ts = ''
    //     if (trafficSource == "NewsBreak") {
    //       ts = 'NEWSBREAK'
    //     } else if (trafficSource == "RevContent") {
    //       ts = 'REVCONTENT'
    //     }
    //     while (headline.includes(' ')) {
    //       headline = headline.replace(' ', '+');
    //     }
    //     while (terms.includes(' ')) {
    //       terms = terms.replace(' ', '+');
    //     }
    //     let data = { 
    //       offerName: offerName,
    //       geo: geo,
    //       trafficSource: ts,
    //       headline: headline,
    //       asid: asid,
    //       terms: terms
    //     }
    //     let createLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/create-link-marmar',data).catch(err=>{
    //       console.log(err)
    //       return false
    //     })
    //     if (!createLink.data.ok) {
    //       return false
    //     } else {
    //       return createLink.data
    //     }
    //   }
    //   // return "clickflare-link-for-test"
    }

    // this.getPeerclickOffer = async function(id, offerId) {
    //   let offerBody = await axios.post(staticData.APIUrl+PORT+'/ApiManager/get-peerclick-offer',{offerId:offerId}).catch(err=>{console.log(err)})
    //   if(offerBody.data.ok) {
    //     userManager.setOfferBody(id, offerBody.data.offer);
    //     return true
    //   }
    //   return false
    // }

    // this.getPeerclickOperation = async function(operation, offerId, body) {
    //   if (operation == "MarMarOT") {
    //     let data = { 
    //       offerId: offerId,
    //       offerBody: body
    //     }
    //     let editLink = await axios.post(staticData.APIUrl+PORT+'/ApiManager/edit-marmar-offer-terms',data).catch(err=>{
    //       console.log(err)
    //       return false
    //     })
    //     if (!editLink.data.ok) {
    //       return false
    //     } else {
    //       return true
    //     }
    //   }
    // }
  }
}

module.exports = new ApiManager()