export const uk = {
  auth: {
    login: {
      connectingToGitHub: 'Підключення до GitHub...',
      preparingGitPoint: 'Підготовка GitPoint...',
      cancel: 'ВІДМІНИТИ',
      welcomeTitle: 'Ласкаво просмо в GitPoint',
      welcomeMessage: 'Найбільш багатофункціональни безплатний GitHub-клієнт',
      notificationsTitle: 'Керування сповіщеннями',
      notificationsMessage:
        'Переглядайте і керуйте всіма вашими непрочитаними і активними сповіщеннями',
      reposTitle: 'Репозиторії і користувач',
      reposMessage:
        'Легко отримуйте інформацію про репозиторій, користувача і організації',
      issuesTitle: 'Задачі и Pull-запити',
      issuesMessage:
        'Спілкуйтесь, приймайте pull-запити і робіть багато іншого',
      signInButton: 'УВІЙТИ',
    },
    welcome: {
      welcomeTitle: 'Ласкаво просимо в GitPoint',
    },
    events: {
      welcomeMessage:
        'Ласкаво просимо! Це ваша стрічка новин - вона допоможе слідкувати вам за останньою активністю в репозиторіях, які ви відслідковуєте, і за користувачами, на яких ви підписані.',
      commitCommentEvent: 'прокоментував коміт',
      createEvent: 'створив {{object}}',
      deleteEvent: 'видалив {{object}}',
      issueCommentEvent: '{{action}} {{type}}',
      issueEditedEvent: '{{action}} свій коментар в {{type}}',
      issueRemovedEvent: '{{action}} свій коментар в {{type}}',
      issuesEvent: '{{action}} задачу',
      publicEvent: {
        action: 'створив',
        connector: 'відкритим',
      },
      pullRequestEvent: '{{action}} pull-запит',
      pullRequestReviewEvent: '{{action}} перегляд коду pull-запиту',
      pullRequestReviewCommentEvent: '{{action}} pull-запит',
      pullRequestReviewEditedEvent:
        '{{action}} свій коментар в pull-запиті',
      pullRequestReviewDeletedEvent:
        '{{action}} свій комментар в pull-запиті',
      releaseEvent: '{{action}} реліз',
      atConnector: 'на',
      toConnector: 'в',
      types: {
        pullRequest: 'pull-запит',
        issue: 'задачу',
      },
      objects: {
        repository: 'репозиторій',
        branch: 'гілку',
        tag: 'тег',
      },
      actions: {
        added: 'додав',
        created: 'створив',
        edited: 'відредагував',
        deleted: 'видалив',
        assigned: 'призначив',
        unassigned: 'видалив із відповідальних',
        labeled: 'добавив мітку',
        unlabeled: 'забрав мітку',
        opened: 'відкрив',
        milestoned: 'запланував',
        demilestoned: 'забрав із плану',
        closed: 'закрив',
        reopened: 'заново відкрив',
        review_requested: 'запитав огляд змін',
        review_request_removed: 'відхилив запит на огляд змін',
        submitted: 'подав',
        dismissed: 'відхилив',
        published: 'опублікував',
        publicized: 'оприлюднив',
        privatized: 'приватизував',
        starred: 'відмітив',
        pushedTo: 'відправив в',
        forked: 'клонував',
        commented: 'прокоментував',
        removed: 'видалив',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Не бачите всіх ваших організацій?',
      orgsRequestApprovalBottom:
        'Вам, можливо, доведеться подати запит на отримання дозволу для них.',
      codePushCheck: 'Перевірити оновлення',
      codePushChecking: 'Перевірка оновлення...',
      codePushUpdated: 'Програму оновлено',
      codePushAvailable: 'Доступне оновлення!',
      codePushNotApplicable: 'Не підтримується в режимі налагодження',
    },
    userOptions: {
      donate: 'Пожертвувати',
      title: 'Налаштування',
      language: 'Мова',
      privacyPolicy: 'Політика конфіденційності',
      signOut: 'Вийти',
    },
    privacyPolicy: {
      title: 'Політика конфіденційності',
      effectiveDate: 'Останнє оновлення: 15 липня 2017 р.',
      introduction:
        'Ми раді, що ви вирішили використовувати GitPoint. Ця Політика Конфіденційності повідомляє вас про те, що ми робимо і не робимо з даними нашого користувача.',
      userDataTitle: 'ДАНІ КОРИСТУВАЧА',
      userData1:
        'Ми ніяк не використовуємо ваші дані на GitHub. Після аутентификації токен користувача OAuth зберігається безпосередньо в памʼять пристрою. Ми не можемо отримати його. Ми ніколи не переглядаємо токен доступа користувача і не зберігаємо його взагалі.',
      userData2:
        'Це значить, що ми ніяким чином не можемо використовувати або передавати дані користувача GitHub. Якщо його особисті дані коли-небудь стають видимими, ми не будемо їх записувати і переглядати. Якщо це випадково відбулось, ми видалимо їх негайно, використовуючи безпечні методи видалення. Крім того, ми спеціально налаштували аутентифікацію таким чином, щоб цього ніколи не відбулось.',
      analyticsInfoTitle: 'ІНФОРМАЦІЯ ПРО АНАЛІТИКУ',
      analyticsInfo1:
        'В даний час ми використовуємо Google Analytics і iTunes App Analytics, щоб виміряти тенденції трафіку і використання GitPoint. Ці інструменти збирають інформацію, відправлену вашим пристроєм, включаючи версії пристрою і платформи, регіон і реферер. Цієї інформації недостатньо для ідентификації якого-небудь конкретного окремого користувача, жодна інша особиста інформація не передається.',
      analyticsInfo2:
        'Якщо ми підключимо іншу сторонню платформу для збору трасувань стеку, журналів помилок або великої інформації для аналітики, ми зробимо це таким чином, зоб дані користувачів залишались анонімними і зашифрованими.',
      openSourceTitle: 'ВІДКРИТИ ВИХІДНИЙ КОД',
      openSource1:
        'GitPoint - це продукт з відкритим вихіжним кодом, і історія внесків в додаток завжди буде видна публіці.',
      openSource2:
        'З кожним внеском в додатко завжди виконується перевірка коду, щоб ніхто не зміг включити будь-якого виду шкідливий код.',
      contactTitle: 'КОНТАКТИ',
      contact1:
        'Дякуємо вам за ознайомлення з нашою Політикою Конфіденційності. Ми надіємось, що вам сподобається використовувати GitPoint так само, як і нам подобається його розробляти.',
      contact2:
        'Якщо у вас є які-небудь питання з приводу цієї Політики Конфіденційності або GitPoint в цілому, будь ласка, створіть задачу в',
      contactLink: 'репозиторії GitPoint',
    },
  },
  notifications: {
    main: {
      unread: 'не прочитано',
      participating: 'бере участь',
      all: 'всі',
      unreadButton: 'Не прочитано',
      participatingButton: 'Бере участь',
      allButton: 'Всі',
      retrievingMessage: 'Отримання сповіщень',
      noneMessage: 'У вас немає сповіщень цього типу',
      markAllAsRead: 'Відмітити всі як прочитані',
    },
  },
  search: {
    main: {
      repositoryButton: 'Репозиторії',
      userButton: 'Користувачі',
      searchingMessage: 'Пошук по {{query}}',
      searchMessage: 'Пошук {{type}}',
      repository: 'репозиторіїв',
      user: 'користувачів',
      noUsersFound: 'Користувачів не знайдено :(',
      noRepositoriesFound: 'Репозиторіїв не знайдено :(',
    },
  },
  user: {
    profile: {
      userActions: 'Дії з користувачем',
      unfollow: 'Відписатись',
      follow: 'Підписатись',
    },
    repositoryList: {
      title: 'Репозиторії',
    },
    followers: {
      title: 'Підписники',
      text: 'Підписників',
      followsYou: 'Підписаний на вас',
    },
    following: {
      title: 'Підписки',
      text: 'Підписок',
      followingYou: 'Підписаний',
    },
  },
  repository: {
    main: {
      shareRepositoryTitle: 'Поділитись {{repoName}}',
      shareRepositoryMessage: 'Перевірити {{repoName}} на GitHub. {{repoUrl}}',
      repoActions: 'Дії с репозиторієм',
      forkAction: 'Клонувати',
      starAction: 'Відмітити',
      unstarAction: 'Зняти відмітку',
      shareAction: 'Поділитись',
      unwatchAction: 'Перестати спостерігати',
      watchAction: 'Спостерігати',
      ownerTitle: 'ВЛАСНИК',
      contributorsTitle: 'УЧАСНИКИ',
      noContributorsMessage: 'Учасники не знайдені',
      sourceTitle: 'КОД',
      readMe: 'README',
      viewSource: 'Дивитись код',
      issuesTitle: 'ЗАДАЧІ',
      noIssuesMessage: 'Немає задач',
      noOpenIssuesMessage: 'Немає відкритих задач',
      viewAllButton: 'Дивитись все',
      newIssueButton: 'Нова задача',
      pullRequestTitle: 'PULL-ЗАПИТИ',
      noPullRequestsMessage: 'Немає pull-запитів',
      noOpenPullRequestsMessage: 'Немає відкритих pull-запитів',
      starsTitle: 'Зірок',
      forksTitle: 'Форків',
      forkedFromMessage: 'склоновано від',
      starred: 'Відмічено',
      watching: 'Спостерігаю',
      watchers: 'Спостерігачів',
    },
    codeList: {
      title: 'Код',
    },
    issueList: {
      title: 'Задачі',
      openButton: 'Відкрито',
      closedButton: 'Закрито',
      searchingMessage: 'Пошук по {{query}}',
      noOpenIssues: 'Не знайдено відкритих задач!',
      noClosedIssues: 'Не знайдено закритих задач!',
    },
    pullList: {
      title: 'Pull-запити',
      openButton: 'Відкрито',
      closedButton: 'Закрито',
      searchingMessage: 'Пошук по {{query}}',
      noOpenPulls: 'Не знайдено відкритих pull-запитів!',
      noClosedPulls: 'Не знайдено закритих pull-запитів!',
    },
    pullDiff: {
      title: 'Порівняти зміни',
      numFilesChanged: '{{numFilesChanged}} файлів',
      new: 'НОВИЙ',
      deleted: 'ВИДАЛЕНИЙ',
      fileRenamed: 'Файл перейменований без будь-яких змін',
    },
    readMe: {
      readMeActions: 'Дії з README',
      noReadMeFound: 'He вдалось знайти README.md',
    },
  },
  organization: {
    main: {
      membersTitle: 'УЧАСНИКИ',
      descriptionTitle: 'ОПИС',
    },
    organizationActions: 'Дії з організацією',
  },
  issue: {
    settings: {
      title: 'Налаштування',
      pullRequestType: 'Pull-запити',
      issueType: 'задачу',
      applyLabelButton: 'Додати ярлик',
      noneMessage: 'Поки немає',
      labelsTitle: 'ЯРЛИКИ',
      assignYourselfButton: 'Призначити самому собі',
      assigneesTitle: 'ВІДПОВІДАЛЬНІ',
      actionsTitle: 'ДІЇ',
      unlockIssue: 'Розблокувати {{issueType}}',
      lockIssue: 'Блокувати {{issueType}}',
      closeIssue: 'Закрити {{issueType}}',
      reopenIssue: 'Відкрити знову {{issueType}}',
      areYouSurePrompt: 'Ви впевнені?',
      applyLabelTitle: 'Додати мітку до цієї задачі',
    },
    comment: {
      commentActions: 'Дії З Коментарем',
      editCommentTitle: 'Редагувати Коментар',
      editAction: 'Редагувати',
      deleteAction: 'Видалити',
    },
    main: {
      assignees: 'Відповідальні',
      mergeButton: 'Приняти pull-запит',
      noDescription: 'Немає опису.',
      lockedCommentInput:
        'Заблоковано, але ви все ще можете прокоментувати...',
      commentInput: 'Додати коментар...',
      commentButton: 'Відправити',
      lockedIssue: 'Задача заблокована',
      states: {
        open: 'Відкрито',
        closed: 'Закрито',
        merged: 'Злито',
      },
      screenTitles: {
        issue: 'Задача',
        pullRequest: 'Pull-запит',
      },
      openIssueSubTitle:
        '#{{number}} відкритий {{time}} назад користувачем {{user}}',
      closedIssueSubTitle:
        '#{{number}} закритий {{time}} назад користувачем {{user}}',
      issueActions: 'Дії з задачею',
    },
    newIssue: {
      title: 'Нова задача',
      missingTitleAlert: 'Потрібно вказати назву задачі',
      issueTitle: 'Назва задачі',
      writeATitle: 'Напишіть назву задачі',
      issueComment: 'Коментар задачі',
      writeAComment: 'Напишіть коментар до задачі',
    },
    pullMerge: {
      title: 'Прийняти pull-запит',
      createMergeCommit: 'Стоврити коміт злиття',
      squashAndMerge: 'Обʼєднати і злити',
      merge: 'злити',
      squash: 'обʼєднати',
      missingTitleAlert: 'Потрібно написати заголовок до коміту!',
      commitTitle: 'Заголовок коміту',
      writeATitle: 'Напишіть заголовок коміту',
      commitMessage: 'Текст повідомленя коміту',
      writeAMessage: 'Напишіть текст повідомлення коміту',
      mergeType: 'Тип злиття',
      changeMergeType: 'Змінити тип злиття',
    },
  },
  common: {
    bio: 'ДОВІДКА',
    stars: 'Зірок',
    orgs: 'ОРГАНІЗАЦІЇ',
    noOrgsMessage: 'Нема організацій',
    info: 'ІНФОРМАЦІЯ',
    company: 'Компанія',
    location: 'Місцезнаходження',
    email: 'Електронна пошта',
    website: 'Сайт',
    repositories: 'Репозиторіїв',
    issue: 'задача',
    cancel: 'Відминити',
    yes: 'Так',
    ok: 'OK',
    submit: 'Відправити',
    relativeTime: {
      past: '%s',
      s: 'зараз',
      m: '1 хв',
      mm: '%d хв',
      h: '1 г',
      hh: '%d г',
      d: '1 д',
      dd: '%d д',
      M: '1 міс',
      MM: '%d міс',
      y: '1 р',
      yy: '%d р',
    },
    abbreviations: {
      thousand: ' тис.',
    },
    openInBrowser: 'Відкрити в браузері',
  },
};
