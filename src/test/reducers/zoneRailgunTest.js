import { zoneRailgunReducer } from '../..//reducers/zoneRailgun';
import * as ActionTypes from '../..//constants/ActionTypes';

const initialState = {
  entities: {},
  isFetching: false
};

describe('Zone Railgun Reducer', () => {
  it('should return the initial state', () => {
    expect(zoneRailgunReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ZONE_RAILGUNS_FETCH_ALL', () => {
    expect(
      zoneRailgunReducer(undefined, {
        type: ActionTypes.ZONE_RAILGUNS_FETCH_ALL
      })
    ).toEqual({
      entities: {},
      isFetching: true
    });
  });

  it('should handle ZONE_RAILGUNS_FETCH_ALL_SUCCESS', () => {
    expect(
      zoneRailgunReducer(undefined, {
        type: ActionTypes.ZONE_RAILGUNS_FETCH_ALL_SUCCESS,
        zoneId: 'zoneId',
        zoneRailguns: [
          {
            id: 'railgunId',
            name: 'railgun name',
            enabled: true,
            connected: true
          }
        ]
      })
    ).toEqual({
      entities: {
        zoneId: {
          railgunId: {
            id: 'railgunId',
            name: 'railgun name',
            enabled: true,
            connected: true
          }
        }
      },
      isFetching: false
    });
  });

  it('should handle ZONE_RAILGUNS_FETCH_ALL_ERROR', () => {
    expect(
      zoneRailgunReducer(undefined, {
        type: ActionTypes.ZONE_RAILGUNS_FETCH_ALL_ERROR
      })
    ).toEqual(initialState);
  });

  it('should handle ZONE_RAILGUNS_CONNECTION_UPDATE', () => {
    expect(
      zoneRailgunReducer({ entities: { zoneId: {} } }, {
        type: ActionTypes.ZONE_RAILGUNS_CONNECTION_UPDATE,
        zoneId: 'zoneId',
        zoneRailgun: {
          id: 'railgunId',
          name: 'railgun name',
          enabled: true,
          connected: true
        }
      })
    ).toEqual({
      entities: {
        zoneId: {
          railgunId: {
            id: 'railgunId',
            name: 'railgun name',
            enabled: true,
            connected: true
          }
        }
      },
      isFetching: true
    });
  });

  it('should handle ZONE_RAILGUNS_CONNECTION_UPDATE_SUCCESSS', () => {
    expect(
      zoneRailgunReducer({ entities: { zoneId: {} } }, {
        type: ActionTypes.ZONE_RAILGUNS_CONNECTION_UPDATE_SUCCESSS,
        zoneId: 'zoneId',
        zoneRailgun: {
          id: 'railgunId',
          name: 'railgun name',
          enabled: true,
          connected: true
        }
      })
    ).toEqual({
      entities: {
        zoneId: {
          railgunId: {
            id: 'railgunId',
            name: 'railgun name',
            enabled: true,
            connected: true
          }
        }
      },
      isFetching: false
    });
  });

  it('should handle ZONE_RAILGUNS_CONNECTION_UPDATE_ERROR', () => {
    expect(
      zoneRailgunReducer({ entities: { zoneId: {} } }, {
        type: ActionTypes.ZONE_RAILGUNS_CONNECTION_UPDATE_ERROR,
        zoneId: 'zoneId',
        zoneRailgun: {
          id: 'railgunId',
          name: 'railgun name',
          enabled: true,
          connected: true
        }
      })
    ).toEqual({
      entities: {
        zoneId: {
          railgunId: {
            id: 'railgunId',
            name: 'railgun name',
            enabled: true,
            connected: true
          }
        }
      },
      isFetching: false
    });
  });
});
