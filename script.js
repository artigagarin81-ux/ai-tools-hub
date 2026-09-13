// Данные об ИИ инструментах
const tools = [
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
        name: 'ChatGPT',
        description: 'Самый популярный ИИ-ассистент. Ответит на любой вопрос, напишет текст, код.',
        category: 'text',
        url: 'https://chat.openai.com'
    },
    {
        id: 2,
        logo: 'https://www.gstatic.com/images/branding/product/1x/google_colab_48dp.png',
        name: 'Google Colab',
        description: 'Бесплатная среда для Python. Можешь обучать модели ИИ.',
        category: 'code',
        url: 'https://colab.research.google.com'
    },
    {
        id: 3,
        logo: 'https://huggingface.co/front/assets/huggingface_logo-nobg.svg',
        name: 'Hugging Face',
        description: 'Огромная библиотека моделей ИИ. Используй готовые или обучай свои.',
        category: 'code',
        url: 'https://huggingface.co'
    },
    {
        id: 4,
        logo: 'https://www.anthropic.com/images/claude.png',
        name: 'Claude (Anthropic)',
        description: 'Продвинутый ИИ с хорошим пониманием контекста.',
        category: 'text',
        url: 'https://claude.ai'
    },
    {
        id: 5,
        logo: 'https://www.gstatic.com/images/branding/product/1x/gemini_sparkle_v.svg',
        name: 'Gemini (Google)',
        description: 'ИИ от Google. Поиск информации и анализ текста.',
        category: 'text',
        url: 'https://gemini.google.com'
    },
    {
        id: 6,
        logo: 'https://docs.mistral.ai/img/logo.svg',
        name: 'Mistral AI',
        description: 'Европейский ИИ. Быстрый, экономный, бесплатный.',
        category: 'text',
        url: 'https://chat.mistral.ai'
    },
    {
        id: 7,
        logo: 'https://github.githubassets.com/images/modules/copilot/copilot-icon.svg',
        name: 'GitHub Copilot',
        description: 'Помощник для программистов. Бесплатно для студентов.',
        category: 'code',
        url: 'https://github.com/features/copilot'
    },
    {
        id: 8,
        logo: 'https://cdn.openai.com/API/docs/images/dall-e-3.webp',
        name: 'DALL-E (OpenAI)',
        description: 'ИИ для создания картинок. Бесплатные кредиты для новых.',
        category: 'image',
        url: 'https://openai.com/dall-e-3'
    },
    {
        id: 9,
        logo: 'https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/sd_logo.png',
        name: 'Stable Diffusion',
        description: 'Генератор изображений. Полностью бесплатно.',
        category: 'image',
        url: 'https://stablediffusionweb.com'
    },
    {
        id: 10,
        logo: 'https://www.midjourney.com/apple-icon-180.png',
        name: 'Midjourney',
        description: 'Продвинутый генератор изображений. Пробный период.',
        category: 'image',
        url: 'https://www.midjourney.com'
    },
    {
        id: 11,
        logo: 'https://www.perplexity.ai/logo-dark.svg',
        name: 'Perplexity AI',
        description: 'ИИ поисковик с актуальной информацией из интернета.',
        category: 'text',
        url: 'https://www.perplexity.ai'
    },
    {
        id: 12,
        logo: 'https://www.microsoft.com/favicon.ico',
        name: 'Microsoft Copilot',
        description: 'Ассистент от Microsoft. Помогает с кодом и текстом.',
        category: 'code',
        url: 'https://copilot.microsoft.com'
    },
    {
        id: 13,
        logo: 'https://ollama.ai/public/ollama.png',
        name: 'Ollama',
        description: 'Запускай ИИ модели локально. Полностью бесплатно.',
        category: 'code',
        url: 'https://ollama.ai'
    },
    {
        id: 14,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Grammarly_logo.svg/1200px-Grammarly_logo.svg.png',
        name: 'Grammarly',
        description: 'Проверка грамматики и стиля текста.',
        category: 'text',
        url: 'https://www.grammarly.com'
    },
    {
        id: 15,
        logo: 'https://elevenlabs.io/images/favicon-180x180.png',
        name: 'Eleven Labs',
        description: 'ИИ для синтеза речи. Преобразует текст в голос.',
        category: 'other',
        url: 'https://elevenlabs.io'
    },
    {
        id: 16,
        logo: 'https://pika.art/favicon.ico',
        name: 'Pika',
        description: 'ИИ для создания видео. Новая платформа с бесплатными кредитами.',
        category: 'image',
        url: 'https://pika.art'
    },
    {
        id: 17,
        logo: 'https://www.synthesia.io/favicon.ico',
        name: 'Synthesia',
        description: 'Создаёт видео с ИИ-аватарами. Бесплатный план.',
        category: 'image',
        url: 'https://www.synthesia.io'
    },
    {
        id: 18,
        logo: 'https://lmstudio.ai/favicon.ico',
        name: 'LM Studio',
        description: 'Приложение для запуска моделей локально. Бесплатно.',
        category: 'code',
        url: 'https://lmstudio.ai'
    },
    {
        id: 19,
        logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png',
        name: 'Khan Academy',
        description: 'Бесплатный ИИ-учитель. Помогает с учёбой.',
        category: 'text',
        url: 'https://www.khanacademy.org'
    },
    {
        id: 20,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png',
        name: 'Notion AI',
        description: 'ИИ встроен в Notion. Помощь с написанием и идеями.',
        category: 'text',
        url: 'https://www.notion.so'
    },
    {
        id: 21,
        logo: 'https://www.deepl.com/img/logo/deepl-logo-blue.svg',
        name: 'DeepL',
        description: 'Лучший переводчик с ИИ. Естественный перевод.',
        category: 'text',
        url: 'https://www.deepl.com'
    },
    {
        id: 22,
        logo: 'https://www.remove.bg/img/logo-favicon.ico',
        name: 'Remove.bg',
        description: 'Удаляет фон с фотографий автоматически.',
        category: 'image',
        url: 'https://www.remove.bg'
    },
    {
        id: 23,
        logo: 'https://www.adobe.com/favicon.ico',
        name: 'Adobe Firefly',
        description: 'ИИ для создания изображений и дизайна от Adobe.',
        category: 'image',
        url: 'https://www.adobe.com/products/firefly.html'
    },
    {
        id: 24,
        logo: 'https://cdn.openai.com/API/docs/images/openai-api-logo.png',
        name: 'OpenAI API',
        description: 'API для разработчиков. Интегрируй ИИ в свои приложения.',
        category: 'code',
        url: 'https://platform.openai.com'
    },
    {
        id: 25,
        logo: 'https://www.jasper.ai/favicon.ico',
        name: 'Jasper',
        description: 'ИИ для написания контента. Есть бесплатный пробный период.',
        category: 'text',
        url: 'https://www.jasper.ai'
    },
    {
        id: 26,
        logo: 'https://www.copy.ai/favicon.ico',
        name: 'Copy.ai',
        description: 'ИИ копирайтер. Пишет рекламные тексты и контент.',
        category: 'text',
        url: 'https://www.copy.ai'
    },
    {
        id: 27,
        logo: 'https://www.descript.com/favicon.ico',
        name: 'Descript',
        description: 'ИИ для редактирования видео и аудио. Транскрибирует речь.',
        category: 'image',
        url: 'https://www.descript.com'
    },
    {
        id: 28,
        logo: 'https://www.loom.com/favicon.ico',
        name: 'Loom',
        description: 'Запись экрана с ИИ-транскрипцией. Бесплатный план.',
        category: 'image',
        url: 'https://www.loom.com'
    },
    {
        id: 29,
        logo: 'https://www.otter.ai/favicon.ico',
        name: 'Otter.ai',
        description: 'ИИ-помощник для встреч. Транскрибирует и резюмирует.',
        category: 'other',
        url: 'https://www.otter.ai'
    },
    {
        id: 30,
        logo: 'https://www.sourcegraph.com/favicon.ico',
        name: 'Sourcegraph Cody',
        description: 'ИИ помощник для программистов. Анализирует код.',
        category: 'code',
        url: 'https://sourcegraph.com/cody'
    },
    {
        id: 31,
        logo: 'https://www.wordtune.com/favicon.ico',
        name: 'Wordtune',
        description: 'ИИ для улучшения письма. Переписывает текст лучше.',
        category: 'text',
        url: 'https://www.wordtune.com'
    },
    {
        id: 32,
        logo: 'https://www.quillbot.com/favicon.ico',
        name: 'QuillBot',
        description: 'Парафраз текстов. Переписывает без плагиата.',
        category: 'text',
        url: 'https://www.quillbot.com'
    }
];

// Получаем элементы
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Функция для отображения инструментов
function displayTools(toolsToShow = tools) {
    toolsGrid.innerHTML = '';
    
    toolsToShow.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div>
                <div class="tool-logo">
                    <img src="${tool.logo}" alt="${tool.name}" onerror="this.style.display='none'">
                </div>
                <h2 class="tool-name">${tool.name}</h2>
                <p class="tool-description">${tool.description}</p>
                <span class="tool-category">${getCategoryName(tool.category)}</span>
            </div>
            <a href="${tool.url}" target="_blank" class="tool-link">Перейти →</a>
        `;
        toolsGrid.appendChild(toolCard);
    });

    if (toolsToShow.length === 0) {
        toolsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 1.1rem;">Инструменты не найдены</p>';
    }
}

// Функция получения названия категории
function getCategoryName(category) {
    const categories = {
        text: 'Текст',
        code: 'Код',
        image: 'Изображение',
        other: 'Другое'
    };
    return categories[category] || category;
}

// Функция фильтрации инструментов
function filterTools() {
    let filtered = tools;

    // Фильтр по категории
    if (currentFilter !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentFilter);
    }

    // Фильтр по поиску
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm)
        );
    }

    displayTools(filtered);
}

// Обработчик поиска
searchInput.addEventListener('input', filterTools);

// Обработчики фильтров
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс к нажатой кнопке
        button.classList.add('active');
        
        // Устанавливаем текущий фильтр
        currentFilter = button.dataset.filter;
        
        // Фильтруем инструменты
        filterTools();
    });
});

// Инициализация: показываем все инструменты при загрузке
displayTools();