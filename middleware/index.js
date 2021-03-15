export function adminRedirect({ store, route, redirect }) {
  if (route.fullPath === '/admin' || route.fullPath === '/admin/') {
    if (store.state.adminPage.showAdmin) {
      return redirect('/admin/galleries')
    } else {
      redirect('/admin-login')
    }
  } else if (
    route.fullPath === '/ru/admin' ||
    route.fullPath === '/ru/admin/'
  ) {
    if (store.state.adminPage.showAdmin) {
      return redirect('/ru/admin/galleries')
    } else {
      redirect('/ru/admin-login')
    }
  } else if (
    route.fullPath === '/uz/admin' ||
    route.fullPath === '/uz/admin/'
  ) {
    if (store.state.adminPage.showAdmin) {
      return redirect('/uz/admin/galleries')
    } else {
      redirect('/uz/admin-login')
    }
  }
}

export function adminOtherPages({ store, route, redirect }) {
  if (
    route.fullPath === '/admin/messages' ||
    route.fullPath === '/admin/partners' ||
    route.fullPath === '/admin/profile' ||
    route.fullPath === '/admin/galleries'
  ) {
    if (!store.state.adminPage.showAdmin) {
      return redirect('/admin-login')
    }
  } else if (
    route.fullPath === '/ru/admin/messages' ||
    route.fullPath === '/ru/admin/partners' ||
    route.fullPath === '/ru/admin/profile' ||
    route.fullPath === '/ru/admin/galleries'
  ) {
    if (!store.state.adminPage.showAdmin) {
      return redirect('/ru/admin-login')
    }
  } else if (
    route.fullPath === '/uz/admin/messages' ||
    route.fullPath === '/uz/admin/partners' ||
    route.fullPath === '/uz/admin/profile' ||
    route.fullPath === '/uz/admin/galleries'
  ) {
    if (!store.state.adminPage.showAdmin) {
      return redirect('/uz/admin-login')
    }
  }
}
