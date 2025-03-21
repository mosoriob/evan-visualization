import React from 'react';
import {
  Route,
  useRouteMatch,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import StationDashboard from '../_components/StationDashboard';

const Router: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`/campaigns/:campaignId/stations`}
        render={({
          match: {
            params: { campaignId },
          },
        }: RouteComponentProps<{ campaignId: string }>) => {
          return <h1>Station Dashboard</h1>;
        }}
      />
      <Route
        path={`/campaigns/:campaignId/stations/:stationId`}
        render={({
          match: {
            params: { campaignId, stationId },
          },
        }: RouteComponentProps<{ campaignId: string; stationId: string }>) => (
          <StationDashboard campaignId={campaignId} stationId={stationId} />
        )}
      />
    </Switch>
  );
};

export default Router;
