import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { intlShape, injectIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import {
  ActionRow,
  Button,
  Container,
  Hyperlink,
  Image,
  TransitionReplace,
} from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import messages from './messages';

ensureConfig([
  'LMS_BASE_URL',
  'MARKETING_SITE_BASE_URL',
  'TERMS_OF_SERVICE_URL',
  'PRIVACY_POLICY_URL',
  'SUPPORT_EMAIL',
  'SITE_NAME',
  'STUDIO_BASE_URL',
  'ENABLE_ACCESSIBILITY_PAGE',
], 'Studio Footer component');

const StudioFooter = ({
  // injected
  intl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { config } = useContext(AppContext);

  return (
    <>
      <Container size="xl" className="px-4 border-top border-light">
        <ActionRow className="container-fluid d-flex py-3 m-0 x-small">
          <Hyperlink destination={config.LMS_BASE_URL}>
            <Image
              width="200px"
              src="https://d24mgaater58cv.cloudfront.net/images/hutech-elearning-logo-large.png"
            />
          </Hyperlink>
          <ActionRow.Spacer />
          <Hyperlink destination={config.LMS_BASE_URL}>LMS</Hyperlink>
        </ActionRow>
      </Container>
    </>
  );
};

StudioFooter.propTypes = {
  // injected
  intl: intlShape.isRequired,
};

export default injectIntl(StudioFooter);
