import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import JournalPageRedirectContainer from '../../containers/JournalPageRedirectContainer';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';
import JournalAboutPageContainer from '../../containers/JournalAboutPageContainer';
import JournalPageContainer from '../../containers/JournalPageContainer';
import JournalPreviewContainer from '../../containers/JournalPreviewContainer';
import JournalAboutPreviewContainer from '../../containers/JournalAboutPreviewContainer';

class JournalRouter extends React.Component {
  componentDidMount() {
    if (parseInt(this.props.match.params.journalAboutId, 10) !== this.props.journalAboutId) {
      this.props.getJournal(this.props.match.params.journalAboutId);
    }
    if (this.props.isAuthenticated) {
      this.props.toggleNavigationVisibility(true);
    }
  }

  componentDidUpdate(prevProps) {
    // if journal changes
    if (prevProps.match.params.journalAboutId !== this.props.match.params.journalAboutId) {
      this.props.getJournal(this.props.match.params.journalAboutId);
    }
    // if auth state changes
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.toggleNavigationVisibility(true);
    }
  }

  render() {
    return (
      <Switch>
        <PrivateRouteContainer exact path="/:journalAboutId" component={JournalPageRedirectContainer} />
        <Route path="/:journalAboutId/about" component={JournalAboutPageContainer} />
        <PrivateRouteContainer path="/:journalAboutId/pages/:pageId" component={JournalPageContainer} />
        <PrivateRouteContainer path="/:journalAboutId/pagePreview/:previewId" component={JournalPreviewContainer} />
        <PrivateRouteContainer path="/:journalAboutId/aboutPreview/:previewId" component={JournalAboutPreviewContainer} />
      </Switch>
    );
  }
}

JournalRouter.defaultProps = {
  getJournal: () => {},
  toggleNavigationVisibility: () => {},
  isAuthenticated: false,
  journalAboutId: 0,
};

JournalRouter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalAboutId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  getJournal: PropTypes.func,
  toggleNavigationVisibility: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  journalAboutId: PropTypes.number,
};

export default JournalRouter;
