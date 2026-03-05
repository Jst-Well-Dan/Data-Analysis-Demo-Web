(function () {
    // 获取当前页面文件名，用于高亮激活 Tab
    function getActivePage() {
        var path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    // 顶部导航
    function buildNavHTML(active) {
        var tabs = [
            { href: 'index.html', label: '核心能力' },
            { href: 'dashboard.html', label: '经营看板' },
            { href: 'report.html', label: '战略报告' }
        ];
        var tabsHTML = tabs.map(function (t) {
            var isActive = active === t.href;
            return '<a href="' + t.href + '" class="px-6 py-1.5 rounded-md text-sm font-medium transition-all ' +
                (isActive ? 'bg-white shadow-sm text-brand-blue' : 'text-slate-500 hover:text-brand-blue') +
                '">' + t.label + '</a>';
        }).join('');

        return '<nav class="fixed top-0 left-0 w-full z-50 glass-nav">' +
            '<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">' +
            '<a href="index.html" class="flex items-center gap-3 group">' +
            '<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-light flex items-center justify-center text-white shadow-md shadow-brand-blue/30 transition-transform group-hover:scale-105">' +
            '<i data-lucide="compass" class="w-5 h-5"></i>' +
            '</div>' +
            '<span class="font-bold text-lg tracking-tight text-brand-navy font-serif transition-colors group-hover:text-brand-blue">知微探界</span>' +
            '<span class="text-sm text-slate-400 font-sans hidden md:inline-block border-l border-slate-200 pl-3 ml-1">为企业决策者打造的 AI 分析平台</span>' +
            '</a>' +
            '<div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-slate-100 p-1 rounded-lg border border-slate-200">' +
            tabsHTML +
            '</div>' +
            '<div class="flex items-center gap-4"></div>' +
            '</div>' +
            '</nav>';
    }

    // 全局页脚（含 CTA + 备案号）
    function buildFooterHTML() {
        return '<footer class="border-t border-slate-200/60 bg-white/50 backdrop-blur-sm mt-auto relative overflow-hidden">' +
            '<div class="max-w-7xl mx-auto px-6 pt-16 pb-8">' +
            '<div class="bg-gradient-to-br from-brand-tint to-white border border-brand-pale rounded-2xl p-8 md:p-10 shadow-lg shadow-brand-pale/20 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">' +
            '<div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl"></div>' +
            '<div class="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl"></div>' +
            '<div class="relative z-10 text-center md:text-left">' +
            '<h3 class="text-2xl font-serif font-bold text-brand-navy mb-2">寻找属于您的数据破局方案？</h3>' +
            '<p class="text-slate-600">联系我们的 CFA 持证分析师团队，获取为您企业量身定制的 AI 智能分析演示。</p>' +
            '</div>' +
            '<div class="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 md:mt-0">' +
            '<a href="mailto:business@zwtj.site" class="group flex items-center justify-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-xl font-medium shadow-[0_8px_30px_rgb(43,78,158,0.2)] hover:bg-brand-navy hover:shadow-[0_8px_30px_rgb(28,52,97,0.3)] hover:-translate-y-1 transition-all duration-300 border border-brand-light/30">' +
            '<div class="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">' +
            '<i data-lucide="mail" class="w-5 h-5 text-white"></i>' +
            '</div>' +
            '<span class="text-lg tracking-wide">business@zwtj.site</span>' +
            '<i data-lucide="arrow-right" class="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>' +
            '</a>' +
            '<div class="flex flex-col items-center gap-1.5 group bg-white/60 p-2 rounded-xl border border-brand-pale/50 backdrop-blur-sm">' +
            '<img src="pic/二维码.png" alt="联系我们" class="w-16 h-16 rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105">' +
            '<span class="text-[10px] font-medium text-slate-500 tracking-wider">联系我们</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="flex flex-col items-center justify-center border-t border-slate-200/60 pt-8 mt-4">' +
            '<div class="text-xs md:text-sm text-slate-500 text-center leading-relaxed">' +
            '&copy; 2026 北京知微探界科技有限公司 保留所有权利' +
            '<span class="hidden md:inline-block text-slate-300 mx-2">|</span>' +
            '<br class="md:hidden" />' +
            '<a href="https://beian.miit.gov.cn/" target="_blank" class="hover:text-brand-blue transition-colors">京ICP备2025141006号-1</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</footer>';
    }

    // 移动端底部导航（safe-area 已修复）
    function buildMobileNavHTML(active) {
        var tabs = [
            { href: 'index.html', label: '核心能力', icon: 'layers' },
            { href: 'dashboard.html', label: '经营看板', icon: 'layout-dashboard' },
            { href: 'report.html', label: '战略报告', icon: 'file-text' }
        ];
        var tabsHTML = tabs.map(function (t) {
            var isActive = active === t.href;
            return '<a href="' + t.href + '" class="flex-1 flex flex-col items-center justify-center py-3 gap-1 relative ' +
                (isActive ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600') +
                ' group">' +
                '<i data-lucide="' + t.icon + '" class="w-5 h-5 transition-transform group-active:scale-90"></i>' +
                '<span class="text-[10px] font-medium tracking-wide">' + t.label + '</span>' +
                '<div class="absolute top-0 w-8 h-0.5 bg-brand-blue rounded-full transition-all ' +
                (isActive ? 'opacity-100' : 'opacity-0') +
                '"></div>' +
                '</a>';
        }).join('');

        return '<div class="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 px-6 flex items-center justify-around shadow-[0_-4px_20px_rgba(28,52,97,0.06)] overflow-hidden" style="padding-bottom: max(0.5rem, env(safe-area-inset-bottom))">' +
            tabsHTML +
            '</div>';
    }

    // 滚动入场动画（Intersection Observer）
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
                el.classList.add('is-visible');
            });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
            observer.observe(el);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var active = getActivePage();

        // 注入顶部导航（插入 body 第一个子元素之前）
        var navWrapper = document.createElement('div');
        navWrapper.innerHTML = buildNavHTML(active);
        document.body.insertBefore(navWrapper.firstElementChild, document.body.firstChild);

        // 注入全局页脚
        var footerWrapper = document.createElement('div');
        footerWrapper.innerHTML = buildFooterHTML();
        document.body.appendChild(footerWrapper.firstElementChild);

        // 注入移动端底部导航
        var mobileWrapper = document.createElement('div');
        mobileWrapper.innerHTML = buildMobileNavHTML(active);
        document.body.appendChild(mobileWrapper.firstElementChild);

        // 初始化 Lucide 图标（覆盖注入的导航 + 页面内容）
        if (window.lucide) lucide.createIcons();

        // 初始化滚动动画
        initScrollAnimations();
    });
})();
