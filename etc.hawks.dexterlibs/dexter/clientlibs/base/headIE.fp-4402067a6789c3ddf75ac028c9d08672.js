<h1>
null
</h1>
<pre>
java.lang.AbstractMethodError
	at javax.servlet.http.HttpServletResponseWrapper.getHeader(HttpServletResponseWrapper.java:240)
	at javax.servlet.http.HttpServletResponseWrapper.getHeader(HttpServletResponseWrapper.java:240)
	at javax.servlet.http.HttpServletResponseWrapper.getHeader(HttpServletResponseWrapper.java:240)
	at com.adobe.dexter.versionedclientlibs.impl.ResponseWrapper.isGzipped(ResponseWrapper.java:130)
	at com.adobe.dexter.versionedclientlibs.impl.ResponseWrapper.init(ResponseWrapper.java:73)
	at com.adobe.dexter.versionedclientlibs.impl.ResponseWrapper.getContent(ResponseWrapper.java:58)
	at com.adobe.dexter.versionedclientlibs.servlets.DexterLibsRouter.replaceReferencesInContentAndSend(DexterLibsRouter.java:125)
	at com.adobe.dexter.versionedclientlibs.servlets.DexterLibsRouter.doDispatcher(DexterLibsRouter.java:115)
	at com.adobe.dexter.versionedclientlibs.servlets.DexterLibsRouter.dispatcherToHtmlLibrary(DexterLibsRouter.java:103)
	at com.adobe.dexter.versionedclientlibs.servlets.DexterLibsRouter.doGet(DexterLibsRouter.java:91)
	at org.apache.sling.api.servlets.SlingSafeMethodsServlet.mayService(SlingSafeMethodsServlet.java:266)
	at org.apache.sling.api.servlets.SlingSafeMethodsServlet.service(SlingSafeMethodsServlet.java:342)
	at org.apache.sling.api.servlets.SlingSafeMethodsServlet.service(SlingSafeMethodsServlet.java:374)
	at org.apache.sling.engine.impl.request.RequestData.service(RequestData.java:574)
	at org.apache.sling.engine.impl.filter.SlingComponentFilterChain.render(SlingComponentFilterChain.java:45)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:88)
	at com.day.cq.wcm.core.impl.WCMDebugFilter.doFilter(WCMDebugFilter.java:156)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.day.cq.wcm.core.impl.WCMComponentFilter.filterRootInclude(WCMComponentFilter.java:375)
	at com.day.cq.wcm.core.impl.WCMComponentFilter.doFilter(WCMComponentFilter.java:190)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.core.impl.page.PageLockFilter.doFilter(PageLockFilter.java:91)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.personalization.impl.TargetComponentFilter.doFilter(TargetComponentFilter.java:94)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.SlingRequestProcessorImpl.processComponent(SlingRequestProcessorImpl.java:283)
	at org.apache.sling.engine.impl.filter.RequestSlingFilterChain.render(RequestSlingFilterChain.java:49)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:88)
	at com.adobe.dexter.replication.internal.DownstreamReplicationFilter.doFilter(DownstreamReplicationFilter.java:319)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.day.cq.wcm.core.impl.warp.TimeWarpFilter.doFilter(TimeWarpFilter.java:109)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.cq.social.ugcbase.security.impl.SaferSlingPostServlet.doFilter(SaferSlingPostServlet.java:114)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.day.cq.dam.core.impl.assetlinkshare.AdhocAssetShareAuthHandler.doFilter(AdhocAssetShareAuthHandler.java:440)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.day.cq.dam.core.impl.servlet.ActivityRecordHandler.doFilter(ActivityRecordHandler.java:141)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.rest.impl.servlet.ApiResourceFilter.doFilter(ApiResourceFilter.java:70)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.requests.logging.impl.RequestLoggerImpl.doFilter(RequestLoggerImpl.java:121)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.rest.assets.impl.AssetContentDispositionFilter.doFilter(AssetContentDispositionFilter.java:96)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.core.impl.AuthoringUIModeServiceImpl.doFilter(AuthoringUIModeServiceImpl.java:297)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.mobile.core.impl.redirect.RedirectFilter.doFilter(RedirectFilter.java:248)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.dexter.ops.cacheheaders.internal.CacheHeaderFilter.doFilter(CacheHeaderFilter.java:88)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.dexter.ops.responseheaders.internal.ResponseHeaderFilter.doFilter(ResponseHeaderFilter.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.debug.RequestProgressTrackerLogFilter.doFilter(RequestProgressTrackerLogFilter.java:110)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.adobe.cq.social.commons.cors.CORSAuthenticationFilter.doFilter(CORSAuthenticationFilter.java:91)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.foundation.forms.FormsHandlingServletHelper.handleFilter(FormsHandlingServletHelper.java:226)
	at com.day.cq.wcm.foundation.forms.impl.FormsHandlingServlet.doFilter(FormsHandlingServlet.java:138)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.optout.impl.OptOutFilter.doFilter(OptOutFilter.java:76)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.foundation.forms.FormsHandlingServletHelper.handleFilter(FormsHandlingServletHelper.java:226)
	at com.adobe.cq.wcm.core.components.internal.servlets.CoreFormHandlingServlet.doFilter(CoreFormHandlingServlet.java:126)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.day.cq.wcm.core.impl.WCMRequestFilter.doFilter(WCMRequestFilter.java:90)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.cq.history.impl.HistoryRequestFilter.doFilter(HistoryRequestFilter.java:122)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.rewriter.impl.RewriterFilter.doFilter(RewriterFilter.java:87)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.httpcache.impl.InnerCacheFilter.doFilter(InnerCacheFilter.java:81)
	at com.adobe.granite.httpcache.impl.InnerCacheFilter.doFilter(InnerCacheFilter.java:60)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.i18n.impl.I18NFilter.doFilter(I18NFilter.java:131)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.granite.csrf.impl.CSRFFilter.doFilter(CSRFFilter.java:217)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.security.impl.ContentDispositionFilter.doFilter(ContentDispositionFilter.java:152)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.dexter.xf.filters.XfPageActionsFilter.doFilter(XfPageActionsFilter.java:120)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at com.adobe.dexter.xf.filters.ConvertToXfFilter.doFilter(ConvertToXfFilter.java:125)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:84)
	at com.adobe.granite.resourceresolverhelper.impl.ResourceResolverHelperImpl.doFilter(ResourceResolverHelperImpl.java:83)
	at org.apache.sling.engine.impl.filter.AbstractSlingFilterChain.doFilter(AbstractSlingFilterChain.java:78)
	at org.apache.sling.engine.impl.SlingRequestProcessorImpl.doProcessRequest(SlingRequestProcessorImpl.java:151)
	at org.apache.sling.engine.impl.SlingRequestProcessorImpl.processRequest(SlingRequestProcessorImpl.java:248)
	at com.adobe.hawks.listners.StorageReplicationListener.retrieveContent(StorageReplicationListener.java:101)
	at com.adobe.hawks.listners.StorageReplicationListener.handleEvent(StorageReplicationListener.java:81)
	at org.apache.felix.eventadmin.impl.handler.EventHandlerProxy.sendEvent(EventHandlerProxy.java:415)
	at org.apache.felix.eventadmin.impl.tasks.HandlerTask.runWithoutBlacklistTiming(HandlerTask.java:82)
	at org.apache.felix.eventadmin.impl.tasks.SyncDeliverTasks.execute(SyncDeliverTasks.java:104)
	at org.apache.felix.eventadmin.impl.tasks.AsyncDeliverTasks$TaskExecuter.run(AsyncDeliverTasks.java:166)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)

</pre>
Requested URI is /etc.hawks.dexterlibs/dexter/clientlibs/base/headIE.fp-4402067a6789c3ddf75ac028c9d08672.js
