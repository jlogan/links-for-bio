import {ImageWidget} from '@app/dashboard/biolink/biolink-editor/content/widgets/image-widget/image-widget-dialog';
import {WidgetRendererProps} from '@app/dashboard/biolink/biolink-editor/content/widgets/types/widget-renderer-props';
import clsx from 'clsx';
import {ImageIcon} from '@common/icons/material/Image';
import {CSSProperties} from 'react';

export function ImageWidgetRenderer({
  widget,
  variant,
}: WidgetRendererProps<ImageWidget>) {
  const className = clsx(
    getObjectFitClass(widget),
    getImageClassName({widget, variant}),
  );
  const style = getImageStyle({widget, variant});

  const image = widget.config.url ? (
    <img className={className} style={style} src={widget.config.url} alt="" />
  ) : (
    <div
      className={clsx(className, 'flex items-center justify-center')}
      style={style}
    >
      <ImageIcon
        size={variant === 'editor' ? 'sm' : 'lg'}
        className="text-muted"
      />
    </div>
  );

  if (widget.config.destinationUrl) {
    return <a href={widget.config.destinationUrl}>{image}</a>;
  }
  return image;
}

function getObjectFitClass(widget: ImageWidget) {
  const type = widget.config.type ?? 'default';
  const avatarShape = widget.config.avatarShape ?? 'circle';

  if (type === 'avatar' && avatarShape === 'square') {
    return 'object-contain';
  }

  return 'object-cover';
}

function getImageClassName({
  widget,
  variant,
}: WidgetRendererProps<ImageWidget>) {
  const type = widget.config.type ?? 'default';
  const avatarShape = widget.config.avatarShape ?? 'circle';
  const isAvatar = type === 'avatar';
  const isCircle = isAvatar && avatarShape === 'circle';
  const hasCustomWidth = type === 'default' && !!widget.config.widthPercent;

  if (variant === 'editor') {
    return clsx('w-20 h-20', isCircle ? 'rounded-full' : 'rounded');
  }

  if (isAvatar) {
    return clsx('w-96 h-96 mx-auto', isCircle ? 'rounded-full' : 'rounded');
  }

  if (hasCustomWidth) {
    return 'rounded block mx-auto max-w-full h-auto';
  }

  return 'w-full h-full rounded block';
}

function getImageStyle({
  widget,
  variant,
}: WidgetRendererProps<ImageWidget>): CSSProperties | undefined {
  const type = widget.config.type ?? 'default';

  if (
    type !== 'default' ||
    variant === 'editor' ||
    widget.config.widthPercent == null
  ) {
    return undefined;
  }

  const widthPercent = Math.min(
    100,
    Math.max(1, Number(widget.config.widthPercent) || 100),
  );

  return {width: `${widthPercent}%`};
}
