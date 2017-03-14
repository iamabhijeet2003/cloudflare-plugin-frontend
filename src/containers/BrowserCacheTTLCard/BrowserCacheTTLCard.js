import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Card, CardSection, CardContent, CardControl } from 'cf-component-card';
import Select from 'cf-component-select';

import { asyncZoneUpdateSetting } from '../../actions/zoneSettings';
import { getLastModifiedDate } from '../../utils/utils';
import {
  getZoneSettingsValueForZoneId,
  getZoneSettingsModifiedDateForZoneId
} from '../../selectors/zoneSettings';

const SETTING_NAME = 'browser_cache_ttl';

class BrowserCacheTTLCard extends Component {
  handleChange(option) {
    let { dispatch } = this.props;
    let { value } = option;
    dispatch(
      asyncZoneUpdateSetting(SETTING_NAME, this.props.activeZoneId, value)
    );
  }

  render() {
    const { formatMessage } = this.props.intl;
    let { modifiedDate } = this.props;

    return (
      <div>
        <Card>
          <CardSection>
            <CardContent
              title={formatMessage({
                id: 'container.browserCacheTTLCard.title'
              })}
              footerMessage={getLastModifiedDate(this.props.intl, modifiedDate)}
            >
              <p>
                <FormattedMessage
                  id="container.browserCacheTTLCard.description"
                />
              </p>
            </CardContent>
            <CardControl>
              <Select
                label=""
                value={this.props.browserCacheTTLValue}
                options={[
                  {
                    value: 7200,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twoHours'
                    })
                  },
                  {
                    value: 10800,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.threeHours'
                    })
                  },
                  {
                    value: 14400,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.fourHours'
                    })
                  },
                  {
                    value: 18000,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.fiveHours'
                    })
                  },
                  {
                    value: 28800,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.eightHours'
                    })
                  },
                  {
                    value: 43200,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twelveHours'
                    })
                  },
                  {
                    value: 57600,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.sixteenHours'
                    })
                  },
                  {
                    value: 72000,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twentyHours'
                    })
                  },
                  {
                    value: 86400,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.oneDay'
                    })
                  },
                  {
                    value: 172800,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twoDays'
                    })
                  },
                  {
                    value: 259200,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.threeDays'
                    })
                  },
                  {
                    value: 345600,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.fourDays'
                    })
                  },
                  {
                    value: 432000,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.fiveDays'
                    })
                  },
                  {
                    value: 691200,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.eightDays'
                    })
                  },
                  {
                    value: 1382400,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.sixteenDays'
                    })
                  },
                  {
                    value: 2073600,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twentyFourDays'
                    })
                  },
                  {
                    value: 2678400,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.oneMonth'
                    })
                  },
                  {
                    value: 5356800,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.twoMonths'
                    })
                  },
                  {
                    value: 16070400,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.sixMonths'
                    })
                  },
                  {
                    value: 31536000,
                    label: formatMessage({
                      id: 'container.browserCacheTTLCard.oneYear'
                    })
                  }
                ]}
                onChange={this.handleChange.bind(this)}
              />
            </CardControl>
          </CardSection>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeZoneId: state.activeZone.id,
    browserCacheTTLValue: getZoneSettingsValueForZoneId(
      state.activeZone.id,
      SETTING_NAME,
      state
    ),
    modifiedDate: getZoneSettingsModifiedDateForZoneId(
      state.activeZone.id,
      SETTING_NAME,
      state
    ),
    isFetching: state.zoneSettings.isFetching
  };
}
export default injectIntl(connect(mapStateToProps)(BrowserCacheTTLCard));
