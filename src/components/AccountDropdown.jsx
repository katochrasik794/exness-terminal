import React, { useState } from 'react';

const accountsData = [
  {
    id: 'demo_83067517',
    accountNumber: '83067517',
    accountType: 'Zero',
    mode: 'demo',
    equity: '1,008.16',
    currency: 'USD',
    active: true
  },
  {
    id: 'real_196092361',
    accountNumber: '196092361',
    accountType: 'Standard',
    mode: 'real',
    equity: '0.00',
    currency: 'USD',
    active: false
  },
  {
    id: 'demo_197953411',
    accountNumber: '197953411',
    accountType: 'Standard',
    mode: 'demo',
    equity: '1,078.07',
    currency: 'USD',
    active: false
  }
];

const accountStats = {
  balance: '999.73',
  equity: '1,008.58',
  margin: '4.34',
  freeMargin: '1,004.24',
  marginLevel: '23,239.17',
  leverage: '1:2000'
};

const QuestionIcon = () => (
  <svg name="question-circle" width="16" height="16" fill="none">
    <use href="/webtrading/assets/icons-BzLLixZ2.svg#question-circle"></use>
  </svg>
);

const ChevronRightIcon = () => (
  <svg name="chevron-right" width="16" height="16">
    <use href="/webtrading/assets/icons-BzLLixZ2.svg#chevron-right"></use>
  </svg>
);

const HideBalanceToggle = ({ checked, onChange }) => {
  return (
    <div className="MuiTypography-root MuiTypography-bodyB1Regular HideBalance_container__58d9b muiltr-1s8r8ae">
      <div className="FormControlElement_stack__94139" data-test="hide-balance-toggle">
        <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd FormControlElement_container__94139 FormControlElement_reversed__94139 muiltr-1sl1oqq">
          <span className="MuiSwitch-root MuiSwitch-sizeMedium Toggle_reversed__d92bd muiltr-1tvdcit">
            <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary muiltr-7ilsl6">
              <input 
                className="PrivateSwitchBase-input MuiSwitch-input muiltr-1m9pwf3" 
                type="checkbox" 
                checked={checked}
                onChange={onChange}
              />
              <span className="MuiSwitch-thumb muiltr-19gndve"></span>
            </span>
            <span className="MuiSwitch-track muiltr-g5sy4h"></span>
          </span>
          <span className="MuiTypography-root MuiTypography-bodyB1Regular MuiFormControlLabel-label muiltr-1s8r8ae">Hide balance</span>
        </label>
      </div>
    </div>
  );
};

const AccountStats = ({ stats, isHidden }) => {
  const formatValue = (value, currency = 'USD') => {
    if (isHidden) return '⁦••••••⁩';
    return `⁦${value} ${currency}⁩`;
  };

  const formatPercent = (value) => {
    if (isHidden) return '⁦••••••⁩';
    return `⁦${value} %⁩`;
  };

  return (
    <div className="SelectAccount_statsContainer__f39da">
      <div className="SelectAccount_accountStats__f39da">
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Balance</div>
          <div className="AccountStats_value__27d79">
            <span dir="ltr">{formatValue(stats.balance, stats.currency)}</span>
          </div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="Your funds ignoring the results of currently open positions." data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Equity</div>
          <div className="AccountStats_value__27d79">
            <span dir="ltr">{formatValue(stats.equity, stats.currency)}</span>
          </div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="Your potential new balance if you close all your positions right now." data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Margin</div>
          <div className="AccountStats_value__27d79">
            <span dir="ltr">{formatValue(stats.margin, stats.currency)}</span>
          </div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="The funds we are withholding to keep your current positions open." data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Free margin</div>
          <div className="AccountStats_value__27d79">
            <span dir="ltr">{formatValue(stats.freeMargin, stats.currency)}</span>
          </div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="The funds available to you for opening new positions." data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Margin level</div>
          <div className="AccountStats_value__27d79">
            <span dir="ltr">{formatPercent(stats.marginLevel)}</span>
          </div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="The ratio of Equity to Margin expressed in percent. We use it to calculate Margin Call and Stop Out." data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
        <div className="MuiTypography-root MuiTypography-bodyB1Regular AccountStats_row__27d79 muiltr-1s8r8ae">
          <div className="AccountStats_text__27d79">Account leverage</div>
          <div className="AccountStats_value__27d79">{isHidden ? '⁦••••••⁩' : stats.leverage}</div>
          <div className="AccountStats_tooltip__27d79 Tooltip_tooltip__de1d7" aria-label="Maximum account leverage that can be changed in Personal Area" data-test="account-stats-tooltip">
            <QuestionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountListItem = ({ account, onSelect, isActive }) => {
  const getModeLabel = (mode) => {
    return mode === 'demo' ? 'Demo' : 'Real';
  };

  const getBadgeClass = (mode) => {
    return mode === 'demo' 
      ? 'MuiBadge-badge MuiBadge-light MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorSuccess muiltr-1oulexn'
      : 'MuiBadge-badge MuiBadge-light MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary muiltr-1wagepa';
  };

  return (
    <li className={`AccountListItem_listItemContainer__387ed ${isActive ? 'AccountListItem_active__387ed' : ''}`} data-test={isActive ? 'switch_acc_demo_83067517' : `switch_acc_${account.mode}_${account.accountNumber}`}>
      <button 
        className="AccountListItem_button__387ed" 
        onClick={() => onSelect(account)}
        disabled={isActive}
      >
        <div className="BasicAccountInformation_wrapper__96830">
          <div className="BasicAccountInformation_headerWrap__96830">
            <span inline="true" rectangular="true" className="MuiBadge-root muiltr-1rzb3uu">
              <span data-test="account-info-trading-mode" className={getBadgeClass(account.mode)}>
                {getModeLabel(account.mode)}
              </span>
            </span>
            <span className="MuiTypography-root MuiTypography-captionC1Regular BasicAccountInformation_accountIdentifier__96830 muiltr-z0z6we" data-test="account-info-identifier">
              # {account.accountNumber} {account.accountType}
            </span>
          </div>
          <div className="BasicAccountInformation_equityRow__96830">
            <span dir="ltr">
              <div className="">
                <span className="MuiTypography-root MuiTypography-uIUI2Bold muiltr-8i401k">
                  <span dir="ltr" data-test="equity">
                    <div className="BasicAccountInformation_equityWrapper__96830">
                      {account.equity}
                      <span className="MuiTypography-root MuiTypography-uIUI2Regular muiltr-1s8r8ae" data-test="account-info-currency">
                        {account.currency}
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
            <div className=""></div>
          </div>
        </div>
      </button>
    </li>
  );
};

const AccountLinks = () => {
  return (
    <div className="SelectAccount_accountLinks__f39da mt-4 space-y-2">
      <a 
        className="SelectAccount_link__f39da flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
        data-test="manageAccountsLink"
        href="/pa/"
        target="_blank"
      >
        Manage Accounts
        <ChevronRightIcon />
      </a>
      <button 
        className="SelectAccount_link__f39da flex items-center text-blue-600 hover:text-blue-800 cursor-pointer w-full text-left"
        data-test="downloadTradingLogButton"
      >
        Download Trading Log
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export const AccountDropdown = ({ isOpen, onClose, currentAccount, onAccountSwitch, onTopUp }) => {
  const [hideBalance, setHideBalance] = useState(false);

  const handleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  const handleAccountSelect = (account) => {
    if (account.id !== currentAccount.id) {
      onAccountSwitch(account);
    }
    onClose();
  };

  const handleTopUp = () => {
    if (onTopUp) {
      onTopUp();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50" style={{ width: '340px', height: '338px' }}>
      <div className="SelectAccount_accountTypesWrap__f39da muiltr-bb3oup">
        <div className="SelectAccount_scroller__f39da" style={{ height: '100%', overflow: 'auto' }}>
          {/* Hide Balance Toggle */}
          <HideBalanceToggle checked={hideBalance} onChange={handleHideBalance} />
          
          {/* Account Stats */}
          <AccountStats 
            stats={{ ...accountStats, currency: currentAccount.currency }} 
            isHidden={hideBalance} 
          />
          
          {/* Top Up Button for Demo Accounts */}
          {currentAccount.mode === 'demo' && (
            <div className="AccountWalletButtons_container__beed0">
              <button 
                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedNeutral MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorNeutral MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedNeutral MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorNeutral MuiButton-disableElevation AccountWalletButtons_button__beed0 muiltr-uj1fnu" 
                tabindex="0" 
                type="button" 
                data-test="demo-account-top-up"
                onClick={handleTopUp}
              >
                Top Up
              </button>
            </div>
          )}
          
          {/* Sub Header */}
          <div className="SelectAccount_subHeader__f39da">Choose an account</div>
          
          {/* Account List */}
          <ul className="SelectAccount_accountListWrap__f39da">
            {accountsData.map((account) => (
              <AccountListItem
                key={account.id}
                account={account}
                onSelect={handleAccountSelect}
                isActive={account.id === currentAccount.id}
              />
            ))}
          </ul>
          
          {/* Links */}
          <div className="MuiTypography-root MuiTypography-uIUI2Regular SelectAccount_accountLinks__f39da muiltr-1s8r8ae">
            <a 
              className="SelectAccount_link__f39da" 
              data-test="manageAccountsLink" 
              href="/pa/" 
              target="_blank"
            >
              Manage Accounts
              <ChevronRightIcon />
            </a>
            <button 
              className="SelectAccount_link__f39da" 
              data-test="downloadTradingLogButton"
              onClick={() => console.log('Download Trading Log')}
            >
              Download Trading Log
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;