export const isExternalLink = (url: string): boolean => {
  return /^https?:\/\//.test(url);
};

export interface FormatTimestampOptions {
  /** 目标语言，例如 'zh-CN', 'es-ES', 'en-US'。如果不传，自动读取浏览器当前语言 */
  locale?: string;
  /** 展现形式：'date'(纯日期), 'time'(纯时间), 'dateTime'(日期+时间), 'compact'(紧凑数字) */
  variant?: 'date' | 'time' | 'dateTime' | 'compact';
}

/**
 * 传入时间戳，根据语言自动匹配并格式化输出
 * @param timestamp 支持 13位毫秒级时间戳 (或 Date 对象)
 * @param options 格式化配置项
 */
export const formatTimestampByLocale = (
  timestamp: number | Date,
  options: FormatTimestampOptions = {}
): string => {
  const { locale = navigator.language, variant = 'dateTime' } = options;
  const dateObj = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;

  // 健壮性检查：防止非法时间戳导致崩溃
  if (isNaN(dateObj.getTime())) {
    return '';
  }

  // 根据不同的业务场景（Variant）配置不同的 Intl 映射参数
  let config: Intl.DateTimeFormatOptions = {};

  switch (variant) {
    case 'date':
      // 优雅长日期：例如 "2026年6月9日" 或 "9 de junio de 2026"
      config = { year: 'numeric', month: 'long', day: 'numeric' };
      break;
    case 'time':
      // 纯时间：例如 "14:30" 或 "2:30 PM"
      config = { hour: '2-digit', minute: '2-digit', hour12: false };
      break;
    case 'compact':
      // 紧凑斜杠/点：例如 "2026/06/09" 或 "09/06/2026"
      config = { year: 'numeric', month: '2-digit', day: '2-digit' };
      break;
    case 'dateTime':
    default:
      // 全量日期+时间
      config = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      break;
  }

  return new Intl.DateTimeFormat(locale, config).format(dateObj);
};