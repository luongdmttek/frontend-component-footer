import React from "react";
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import messages from "./Footer.messages";
import IMAGES from "../images";

function FooterContent({intl}) {
    return (
        <footer className="footer text-white px4 /*footer-content-wrapper*/">
            <div className="container /*footer-content*/">
                <div className="py-4">
                    <img className="/*bottom-logo*/" src={IMAGES.footer_logo} alt='bottom logo'/>
                </div>
                <div className="d-flex justify-content-between /*footer-column*/">
                    <div>
                        <div>{intl.formatMessage(messages.info)}</div>
                        <div className="py-1 /*footer-item*/">
                            <span className="pr-1">
                                <img src={IMAGES.home_light}/>
                            </span>
                            <span className="text-uppercase /*footer-item-text*/">
                                {intl.formatMessage(messages.name)}
                            </span>
                        </div>
                        <div className="py-1 /*footer-item*/">
                            <span className="pr-1">
                                <img src={IMAGES.pin_light}/>
                            </span>
                            <span>{intl.formatMessage(messages.address)}</span>
                        </div>
                        <div className="py-1 /*footer-item*/">
                            <span className="pr-1">
                                <img src={IMAGES.phone_light}/>
                            </span>
                            <span>(+84) 28 5445 9998</span>
                        </div>
                        <div className="py-1 /*footer-item*/">
                            <span className="pr-1">
                                <img src={IMAGES.message_light}/>
                            </span>
                            <span>dayhocso@hutech.edu.vn</span>
                        </div>
                    </div>
                    <div className="px-3">
                        <div>{intl.formatMessage(messages.connect)}</div>
                        <div className="d-flex flex-nowrap py-1 /*footer-item*/">
                            <span className="pr-2">
                                <img src={IMAGES.facebook}/>
                            </span>
                            <span>Facebook</span>
                        </div>
                        <div className="d-flex flex-nowrap py-1 /*footer-item*/">
                            <span className="pr-2">
                                <img src={IMAGES.youtube}/>
                            </span>
                            <span>Youtube</span>
                        </div>
                        <div className="d-flex flex-nowrap py-1 /*footer-item*/">
                            <span className="pr-2">
                                <img src={IMAGES.globe}/>
                            </span>
                            <span>Instagram</span>
                        </div>
                    </div>
                    <div>
                        <div>{intl.formatMessage(messages.download)}</div>
                        <div className="d-flex /*download*/">
                            <div className="d-flex flex-column pr-2 /*stores*/">
                                <a className="pb-3" href="https://apps.apple.com/us/app/hutech-x/id1632853626" target="_blank">
                                    <img src={IMAGES.appstore}/>
                                </a>
                                <a className="pt-2" href="https://play.google.com/store/apps/details?id=vn.edu.hutech.lms" target="_blank">
                                    <img src={IMAGES.googleplay}/>
                                </a>
                            </div>
                            <div className="/*qrcode*/">
                                <img src={IMAGES.qr_code}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
FooterContent.prototype = {
    intl: intlShape.isRequired,
}

export default injectIntl(FooterContent);