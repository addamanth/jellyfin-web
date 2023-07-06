import { AsyncRoute, AsyncRouteType } from 'components/router/AsyncRoute';

export const ASYNC_ADMIN_ROUTES: AsyncRoute[] = [
    { path: 'dashboard/activity', page: 'dashboard/activity', type: AsyncRouteType.Experimental },
    { path: 'notificationsettings.html', page: 'dashboard/notifications' },
    { path: 'usernew.html', page: 'user/usernew' },
    { path: 'userprofiles.html', page: 'user/userprofiles' },
    { path: 'useredit.html', page: 'user/useredit' },
    { path: 'userlibraryaccess.html', page: 'user/userlibraryaccess' },
    { path: 'userparentalcontrol.html', page: 'user/userparentalcontrol' },
    { path: 'userpassword.html', page: 'user/userpassword' }
];
