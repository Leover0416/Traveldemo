// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// 显示景点详情
function showDetails(place) {
    const details = {
        '古城': {
            title: '襄阳古城',
            description: '襄阳古城始建于东汉，是中国历史文化名城。古城墙保存完好，是研究中国古代城市建筑的重要实物资料。',
            tips: '建议游览时间：2-3小时\n最佳游览季节：春秋两季\n门票：免费'
        },
        '古隆中': {
            title: '古隆中',
            description: '古隆中是三国时期诸葛亮隐居地，也是《三国演义》中"三顾茅庐"故事的发生地。',
            tips: '建议游览时间：3-4小时\n最佳游览季节：春秋两季\n门票：80元/人'
        },
        '唐城': {
            title: '唐城',
            description: '唐城是一座以唐代建筑风格为主题的旅游景区，展现了盛唐时期的建筑特色和文化风貌。',
            tips: '建议游览时间：2-3小时\n最佳游览季节：四季皆宜\n门票：60元/人'
        }
    };

    const detail = details[place];
    if (detail) {
        alert(`${detail.title}\n\n${detail.description}\n\n${detail.tips}`);
    }
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });
}); 